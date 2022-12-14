import React from 'react';
import githubIcon from '../../assets/images/github-icon.png';

function Project({ project }) {
    return (
        <div
            className='project'
            onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
        >
            <img className='banner' src={project.image} />
            <div className='projectInfo'>
                <h3>{project.name}</h3>
                <img className='github' src={githubIcon} />
            </div>
        </div>
    )
}

export default Project;