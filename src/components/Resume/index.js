import React from 'react';

function Resume() {
    return (
        <div className='resume'>
            <h1>Resume</h1>
            <p>
                <h3>Experience</h3>
                <h4>JULIE PHARACY CORP</h4>
                <div>Pharmacy Technician</div>
                <h4>Heart to Heart Hospice</h4>
                <div>Home Care Provider</div>
                <div>September 2019 - February 2021 (1 year 6 months)</div>
                <div>New York City Metropolitan Area</div>
                <h3>Education</h3>
                <h4>The City College of New York</h4>
                <div>Bachelor's degree, Chemistry</div>
                <h4>Hunter College</h4>
                <div>September 2018 - June 2019</div>
                <h4>Manhattan/Hunter Science High School</h4>
                <div>High School Diploma  · (September 2014 - June 2019)</div>
            </p>
            <button onClick={() => window.location.href = 'https://drive.google.com/file/d/1CzMbpdYNGBTaOFViFJGMhLf3yrN5OgCM/view?usp=sharing'}>Download</button>
        </div>
    )
}

export default Resume;