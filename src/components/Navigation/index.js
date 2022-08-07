import React from 'react';

function Navigation({route, setRoute}) {
    console.log(route)
    return (
        <nav>
            <ul>
                <li
                    onClick={() => setRoute('about')}
                    className={route === 'about' ? 'active' : ''}
                >About</li>
                <li
                    onClick={() => setRoute('projects')}
                    className={route === 'projects' ? 'active' : ''}
                >Projects</li>
                <li
                    onClick={() => setRoute('contact')}
                    className={route === 'contact' ? 'active' : ''}
                >Contact</li>
                <li
                    onClick={() => setRoute('resume')}
                    className={route === 'resume' ? 'active' : ''}
                >Resume</li>
            </ul>
        </nav>
    )
}

export default Navigation;