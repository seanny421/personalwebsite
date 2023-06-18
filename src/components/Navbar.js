import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import ScrollToButton from "../components/Scroll/ScrollToButton";

function Navbar({open, setOpen, isMobile}){
    return(
        <div className="topnav">
            <div>
            <ScrollToButton  toId="home" duration={500}>
                <a href="#home" className="navbar-link-home"><h2 className="navbar-logo">S</h2></a>
            </ScrollToButton>
            </div>
            <div>
            <Burger open={open} setOpen={setOpen}/>

            <Menu open={open} setOpen={setOpen} isMobile={isMobile}/>
            </div>
        </div>
    );

}

export default Navbar;
