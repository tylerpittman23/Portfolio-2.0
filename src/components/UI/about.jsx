import avatar from '../../assets/images/avatar.png';

function About() {
    return (
        <>
        <div id="about" className="about">
            <div className="about-header">
                <div className="about-img" style={{backgroundImage: `url(${avatar})`}}>

                </div>
                <div className="about-body">
                <span>Hey, I'm Tyler. Thanks for stopping by. I'm a full stack web developer with a burning 
                    desire to build things that matter. For the past year I have been building full stack applications for the 
                    web. As a developer, I have the entire users' experience at my fingertiups, thats why I'm dedicated to the finer 
                    details, constantly testing my work to assure there are no unseen side effects or new issues.
                </span>
            </div>
            </div>
        </div>
        </>
    )
}

export default About;