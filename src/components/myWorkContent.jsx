import ProjectDetails from "./UI/projectDetails";

import blackjackWildSrc from '../assets/images/blackjackWild.png';
import notesAppSrc from '../assets/images/notesApp.png';
import weatherAppSrc from '../assets/images/weatherApp.png';
import googleBooksSrc from '../assets/images/googlebooks.png';

function MyWorkContent() {

    const projects = [
        {
            title: 'Blackjack Wild',
            description: 'Javscript based casino style BlackJack game!',
            src: blackjackWildSrc,
            techs: ['HTML','CSS','JavaScript','Express','Node','MySQL','Handlebars','Sequelize'],
            gh: 'https://github.com/Justinh144/BlackJackWild',
            href: 'https://shielded-beyond-59466-3224172544c4.herokuapp.com/'
        },
        {
            title: 'Studdy Buddy',
            description: 'A note taking app built to use a file like structure to keep your notes organized',
            src: notesAppSrc,
            techs: ['HTML','CSS','JavaScript','Express','Node','Handlebars','MySQL','Sequelize'],
            gh: 'https://github.com/tylerpittman23/Notes-App',
            href: ''
        },
        {
            title: 'Forecast Finder',
            description: 'Never let the weather get the best of you, find your forecast!',
            src: weatherAppSrc,
            techs: ['HTML','CSS','JavaScript','OpenWeather API'],
            gh: 'https://github.com/tylerpittman23/Weather-App',
            href: 'https://tylerpittman23.github.io/Weather-App/'
        },
        {
            title: 'Book Finder',
            description: 'Find your next best read with this Google Books api search tool',
            src: googleBooksSrc,
            techs: ['HTML','CSS','JavaScript','Mongoose','Express','React','Apollo Client', 'Bootstrap' ],
            gh: 'https://github.com/tylerpittman23/Book-Search-Engine',
            href: 'https://book-search-engine-nfj7.onrender.com/'
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