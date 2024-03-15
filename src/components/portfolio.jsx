import NavbarContainer from "./UI/navbarContainer";
import NavbarContent from "./navbarContent";
import Email from "./UI/email";
import Hero from "./UI/hero";
import Scroll from "./UI/scroll";
import ProcessContainer from "./UI/processContainer";
import MyWork from "./UI/myWork";
import BioContainer from "./UI/bioContainer";


function PortfolioContainer() {
    return (
        <>
        <NavbarContainer>
            <NavbarContent />
        </NavbarContainer>
        <Hero />
        <Email />
        <Scroll />
        <ProcessContainer />
        <MyWork />
        <BioContainer />
        </>
    )
}

export default PortfolioContainer;