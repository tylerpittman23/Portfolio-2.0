import { useState, useEffect } from "react";

function DesktopNavbar() {

  const links = [
    {
      text: '00. My Work',
      linkId: 'myWork'
    }, 
    {
      text: '01. About',
      linkId: 'about'
    }, 
    {
      text: '02. Contact',
      linkId: 'contact'
    }, 
    {
      text: '03. Resume',
      linkId: 'resume'
    },
  ];
  const [currentSectionId, setCurrentSectionId] = useState('hero');
  
  const scrollToSection = (sectionId) => {
    return () => {
      setCurrentSectionId(sectionId);
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

    return (
        <>
        <div className="links">
          {links.map((link) => {
            return (<button
                      key={link.linkId}
                      onClick={scrollToSection(link.linkId)}
                      className={currentSectionId === link.linkId ? 'active-nav-link' : 'nav-link' }
                    >
                      {link.text}
                    </button>)
          })}
        </div>
        </>
    )
}

export default DesktopNavbar;