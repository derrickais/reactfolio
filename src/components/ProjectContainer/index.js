import React from 'react';
import runBuddy from '../../assets/images/run-buddy.png';
import nee from '../../assets/images/north-eastern-events.png';
import nee2 from '../../assets/images/north-eastern-events-express.png';
import Project from '../Project';

function ProjectContainer() {
    const projects = [{
        name: 'Run-Buddy',
        url: 'https://derrickais.github.io/run-buddy/',
        image: runBuddy
    }, {
        name: 'North Eastern Events',
        url: 'https://derrickais.github.io/nae-events/',
        image: nee
    }, {
        name: 'North Eastern Events Express',
        url: 'https://radiant-sierra-52768.herokuapp.com/index.html',
        image: nee2
    }]

    return (
        <div>
            <h2>Portfolio</h2>
            <div className='projects'>
                {projects.map(project => <Project project={project} />)}
            </div>
        </div>
    )
}

export default ProjectContainer;