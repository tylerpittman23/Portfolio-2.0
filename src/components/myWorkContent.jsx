import ProjectDetails from "./UI/projectDetails";

import blackjackWildSrc from '../assets/images/blackjackWild.png';
import notesAppSrc from '../assets/images/notesApp.png';
import weatherAppSrc from '../assets/images/weatherApp.png';
import scheduleManagerSrc from '../assets/images/scheduleManager.png';

function MyWorkContent() {

    const projects = [
        {
            title: 'Blackjack Wild',
            description: 'great game',
            src: blackjackWildSrc,
            techs: ['HTML','CSS','JavaScript','Expres','Node.js','MySQL','Handlebars.js','Sequelize'],
            gh: 'https://github.com/Justinh144/BlackJackWild',
            href: 'https://blackjack-wild-b09cd00c5ac4.herokuapp.com/classic'
        },
        {
            title: 'Studdy Buddy',
            description: 'helps study',
            src: notesAppSrc,
            techs: ['HTML','CSS','JavaScript','express','Node.js','Handlebars.js','MySQL','Sequelize'],
            gh: 'https://github.com/tylerpittman23/Notes-App',
            href: ''
        },
        {
            title: 'Forecast Finder',
            description: 'dont freeze',
            src: weatherAppSrc,
            techs: ['HTML','CSS','JavaScript','OpenWeather API'],
            gh: 'https://github.com/tylerpittman23/Weather-App',
            href: 'https://tylerpittman23.github.io/Weather-App/'
        },
        {
            title: 'Schedule Manager',
            description: 'call mom',
            src: scheduleManagerSrc,
            techs: ['HTML','CSS','JavaScript','Day.js'],
            gh: 'https://github.com/tylerpittman23/Work-Day-Scheduler',
            href: 'https://tylerpittman23.github.io/Work-Day-Scheduler/'
        },
    ]
    
    return (
        <>
        <div className="my-work-content">
            {projects.map((project) => {
                return <div key={project.title} className="project-card-container">
                <div className="project-card">
                    <ProjectDetails project={project}/>
                </div>
            </div>
            })}
        </div>
        </>
    )
}

export default MyWorkContent;