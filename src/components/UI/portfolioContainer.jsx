import NavbarContainer from "./navbarContainer";
import NavbarContent from "./navbarContent";
import Email from "./email";
import Hero from "./hero";
import Scroll from "./scroll";
import ProcessContainer from "./processContainer";


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
        </>
    )
}

export default PortfolioContainer;