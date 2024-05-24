import ProjectDetails from "./UI/projectDetails";

import blackjackWildSrc from '../assets/images/blackjackWild.png';
import yapAppSrc from '../assets/images/yap.png';
import SSsrc from '../assets/images/S&S-731.png';
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
            title: 'Yap',
            description: 'A real-time chat appplication where you can chat and answer polls',
            src: yapAppSrc,
            techs: ['HTML','CSS','JavaScript','Express', 'Node', 'React', 'MUI', 'Mongoose', 'GraphQL', 'Algoliasearch'], 
            gh: 'https://github.com/Brady-hash/Yap/',
            href: 'https://yap-pcfa.onrender.com/'
        },
        {
            title: 'Stacked & Stored 731',
            description: 'Meet all of your organization needs and live in peace with this professional organizer',
            src: SSsrc,
            techs: ['HTML','CSS','JavaScript','React', 'Node'],
            gh: 'https://github.com/tylerpittman23/stackedNstored731',
            href: 'https://stackednstored731.netlify.app/'
        },
        {
            title: 'Book Finder',
            description: 'Find your next best read with this Google Books api search tool',
            src: googleBooksSrc,
            techs: ['HTML','CSS','JavaScript','Mongoose','Express','React','GraphQL', 'Bootstrap' ],
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