import React from "react";
import StyledAboutDiv from "./StyledAboutDiv";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function About(){

    return (
        <div id="about" className="index-minus1">
            <StyledAboutDiv color="#0e1729">
            <div className="flexbox-container-about">
                <Zoom>
                <div className="flexbox-item-about">
                    <h1 className="about-heading" style={{fontWeight: 'bold'}}>Me, Myself & I</h1>
                    <p><br/>I’m currently in my 3rd year of my Software Engineering degree at the University of Strathclyde. I love creating intuitive and simplistic user interfaces.
                        <br/><br/>
                        Create your website the way you want it. No templates! 
                        I will work with you to create a website that fits your brand, 
                        making sure to keep you updated along the way. 
                        I'll create and deploy the website so you can focus on your business!
                    </p>
        <p style={{ color: '#00E0FF', fontWeight: 'bold'}}>Please get in contact for my student pricing!</p>
                </div>
                </Zoom>
                <Fade right>
                <div className="flexbox-item-about skills-div">
                    <h1 className="skill-heading">ReactJS</h1>
                    <div className="skill-bar">
                        <Slide left>
                        <div className="bgblue width-8"></div>
                        </Slide>
                    </div>

                    <h1 className="skill-heading">NodeJS</h1>
                    <div className="skill-bar">
                        <Slide left>
                        <div className="bgpink width-6"></div>
                        </Slide>
                    </div>

                    <h1 className="skill-heading">MongoDB</h1>
                    <div className="skill-bar">
                    <Slide left>
                        <div className="bgblue width-5"></div>
                        </Slide>
                    </div>

                    <h1 className="skill-heading">HTML & CSS</h1>
                    <div className="skill-bar">
                        <Slide left>
                        
                        <div className="bgpink width-9"></div>
                        </Slide>
                    </div>

                    <h1 className="skill-heading">Bootstrap</h1>
                    <div className="skill-bar mb-5">
                        <Slide left>

                        <div className="bgblue width-7"></div>
                        </Slide>
                    </div>
                </div>
                </Fade>
            </div>
            </StyledAboutDiv>
        </div>
    );
}

export default About;
