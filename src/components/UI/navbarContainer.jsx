import { useState, useEffect, useRef } from "react";
import NavbarContent from "../navbarContent";

function NavbarContainer() {

  const lastScrollTopRef = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // console.log('useEffect navbarContainer')
    const handleScroll = () => {
      const currentScrollPos = document.documentElement.scrollTop;

      if (currentScrollPos > lastScrollTopRef.current) {
        setIsVisible(false)
        // console.log('scrolling down');
      } else {
        setIsVisible(true)
        // console.log('scrolling up');
      }
      lastScrollTopRef.current = currentScrollPos;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [isVisible]);


  return (
    <>
    <nav className= {`navbar-container ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="logo">
        <svg width="60" height="50" viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
          
          <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" />
            <text x="17" y="70">
            TP
            </text>
        </svg>
      </div>
      <NavbarContent />
    </nav>
    </>
    )
}

export default NavbarContainer;