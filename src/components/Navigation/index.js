import React from 'react';

function Navigation({setRoute}) {
    return (
        <nav>
            <ul>
                <li onClick={() => setRoute('about')}>About</li>
                <li onClick={() => setRoute('projects')}>Projects</li>
                <li onClick={() => setRoute('contact')}>Contact</li>
                <li onClick={() => setRoute('resume')}>Resume</li>
            </ul>
        </nav>
    )
}

export default Navigation;