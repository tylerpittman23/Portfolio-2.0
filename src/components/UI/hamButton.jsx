import { useState  } from "react";
import HamMenu from "./hamMenu";

function HamButton() {

    const [hamOpen, setHamOpen] = useState(false);
    const toggleHamMenu = () => {
        return () => setHamOpen(!hamOpen);
    }

    return (
        <>
            <button 
            className="ham-btn"
            onClick={toggleHamMenu()}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

        {hamOpen && <HamMenu />}
        
        </>
    )
}

export default HamButton;