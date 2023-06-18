import React from "react";
import StyledHeader from "./StyledHeader.jsx";
import { Button } from "react-bootstrap";
import { Image  } from "react-bootstrap";
import TypewriterComponent from "typewriter-effect";
import logo from '../SLogo_Big.png';
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import ScrollToButton from "./Scroll/ScrollToButton";

function NextSectionRender(props) {
    if(!props.isMobile){
       return null; 
    }
    return (
        <i className="fas fa-chevron-down"></i>
    );
}

function ImageRenderer(props){
    if(props.isMobile){
        return null;
    }
    return (
        <Fade right>
            <Image className="main-logo img-responsive" style={{width: '60%'}} src={props.picture} fluid/>
        </Fade>

    );

}


function Header({isMobile}){
    return(
        <div id="home" className="index-minus1">
            {/* make navigation with #232D41 burger and logo as home button */}
            <StyledHeader color="#232D41">

                <div className="header-flexbox-container">
                    <div className={`header-flexbox-item  typewriter ${isMobile ? "typewriter-mobile" : ""}`}>
                        <TypewriterComponent className=" index-7"
                            onInit={(typewriter) => {
                                typewriter.changeDelay(75).typeString("Hi,<br>").pauseFor(200).typeString("I'm Sean,<br>").pauseFor(300).typeString("Web Developer").start();
                            }}
                        />
                        <Bounce bottom delay={3000}>
                            {/* <Link activeClass="active" to="contact" spy={true} smooth={true} duration={10}>
                                 <Button href="#contact" className="contact mt-5" variant="outline-blue">Let's Talk!</Button>
                             </Link>*/}
                        
                        <ScrollToButton className="test"style={{cursor: 'pointer'}}  toId="contact" duration={500}>
                                <Button className="contact mt-5" variant="outline-blue">Let's Talk!</Button>
                        </ScrollToButton>
                        </Bounce>
                    </div>
                    <div className="header-flexbox-item flexbox-item-logo">
                        <ImageRenderer isMobile={isMobile} picture={logo}/>
                    </div>
                </div>
                

        
                <ScrollToButton style={{cursor: 'pointer'}} toId="about" duration={500}>
                    <div className="next-section">
                            <NextSectionRender isMobile={isMobile}/>
                    </div>
                </ScrollToButton> 
            </StyledHeader>
        </div>
    );
}

export default Header;
