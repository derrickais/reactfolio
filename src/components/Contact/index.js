import React, {useState, useEffect} from 'react';
import * as EmailValidator from 'email-validator';

function Contact() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false)
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false)
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false)
    const [error, setError] = useState('')


    function handleSend() {
        
    }

    function validateName() {
        if (name === '') {
            setNameError('Name is required')
        } else {
            setNameError(false)
        }
    }

    function validateEmail() {
        const isEmail = EmailValidator.validate(email);
        if (!isEmail) {
            setEmailError('Not a valid email')
        } else {
            setEmailError(false)
        }
    }

    function validateMessage() {
        if (message === '') {
            setMessageError('Message is required')
        } else {
            setMessageError(false)
        }
    }

    return (
        <div className='contact'>
            <h3>Contact</h3>
            <div className='form'>
                <label htmlFor='name'>Name:</label>
                <input
                    name='name'
                    value={name}
                    onBlur={validateName}
                    onChange={e => {
                        const value = e.target.value;
                        setName(value)
                    }}
                />
                {!!nameError && <div className='errorMessage'>{nameError}</div>}
                <label htmlFor='email'>Email:</label>
                <input
                    name='email'
                    value={email}
                    onBlur={validateEmail}
                    onChange={e => {
                        const value = e.target.value;
                        setEmail(value)
                    }}
                />
                {!!emailError && <div className='errorMessage'>{emailError}</div>}
                <label htmlFor='message'>Message:</label>
                <textarea
                    name='message'
                    value={message}
                    onBlur={validateMessage}
                    onChange={e => {
                        const value = e.target.value;
                        setMessage(value)
                    }}
                ></textarea>
                {!!messageError && <div className='errorMessage'>{messageError}</div>}
            </div>
            <div className='errorMessage'>{error}</div>
            <button
                className={(nameError || emailError || messageError) ? 'disabled' : ''}
                onClick={handleSend}
            >Send</button>
        </div>
    )
}

export default Contact;