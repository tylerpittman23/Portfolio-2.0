import { useState, useEffect } from 'react';
import MobileNavbar from './UI/mobNavbar';
import DesktopNavbar from './UI/deskNavbar';

function NavbarContent(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // handle screen resizing without mediaQueries **PRAISE HANDS**
    useEffect(() => {
      // console.log('useEffect navBarContent');
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
        <DesktopNavbar />
          :         
        <MobileNavbar />
        }
        </>
    )
}

export default NavbarContent;