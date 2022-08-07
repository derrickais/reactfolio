import React from 'react';
import githubIcon from '../../assets/images/github-icon.png';
import linkedInIcon from '../../assets/images/linkedin-icon.png';

function Footer() {
    return (
        <footer>
            <img
                onClick={() => window.open('https://github.com/derrickais', '_blank', 'noopener,noreferrer')}
                src={githubIcon}
            />
            <img
                onClick={() => window.open('https://www.linkedin.com/in/derricka-santos-830870232/', '_blank', 'noopener,noreferrer')}
                src={linkedInIcon}
            />
        </footer>
    )
}

export default Footer;