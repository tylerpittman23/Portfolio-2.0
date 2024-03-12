import { useState, useEffect } from 'react';

function NavbarContent(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [hamOpen, setHamOpen] = useState(false);

    const hamBtnHandler = () => {
        setHamOpen(true);
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        // console.log(windowWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    return (
        <>
        {windowWidth > 850 ?
        <div className="links">
          <button>00. About</button>
          <button>01. My Work</button>
          <button>02. Contact</button>
        </div>
          :         
        <button 
        className="ham-btn"
        onClick={() => hamBtnHandler()}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        }
        </>
    )
}

export default NavbarContent;