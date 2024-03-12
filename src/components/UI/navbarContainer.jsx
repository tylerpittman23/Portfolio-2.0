import { useState, useEffect } from "react";
import NavbarContent from "./navbarContent";

function NavbarContainer(props) {
  return (
    <>
    <nav className="navbar-container">
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