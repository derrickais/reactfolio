import React from 'react';
import listenUp from '../../assets/images/listen-up.png';
import nee from '../../assets/images/north-eastern-events.png';
import nee2 from '../../assets/images/north-eastern-events-express.png';
import weatherly from '../../assets/images/weatherly.png'
import notetaker from '../../assets/images/notetaker.png';
import workdayScheduler from '../../assets/images/workdayScheduler.png';
import Project from '../Project';

function ProjectContainer() {
    const projects = [{
        name: 'ListenUp',
        url: 'https://github.com/derrickais/listen-up',
        image: ListenUp
    }, {
        name: 'North Eastern Events',
        url: 'https://derrickais.github.io/nae-events/',
        image: nee
    }, {
        name: 'Weatherly',
        url: 'https://github.com/derrickais/weatherly',
        image: weatherly
    }, {
        name: 'NoteTaker',
        url: 'https://github.com/derrickais/note-taker',
        image: notetaker
    }, {
        name: 'Workday Scheduler',
        url: 'https://github.com/derrickais/workday-scheduler',
        image: workdayScheduler
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