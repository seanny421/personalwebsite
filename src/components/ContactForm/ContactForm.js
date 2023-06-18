import React, {useState} from "react";
import { Button, Form} from "react-bootstrap";
import GoogleMap from "./GoogleMap";
import validator from "validator";
import StyledContactDiv from "../StyledContactDiv";
import { send } from "emailjs-com";
import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

import {NotificationManager} from 'react-notifications';





function ContactForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [phoneNo, setPhoneNo] = useState('');
    const [message, setMessage] = useState('');
    
    function formSubmitHandler(e){
        
        e.preventDefault();
        // createNotification('success');
        // emailjs.sendForm('service_5qr6exq', 'template_u90o3dd', {name, email, phoneNo, message}, 'user_mwjxexZXKZUf3eOQtdS0a')
        if(validateEmail() === true){
            // createNotification('success');
            send(
                'service_5qr6exq',
                'template_u90o3dd',
                {name, email, phoneNo, message},
                'user_mwjxexZXKZUf3eOQtdS0a'
            )
            .then((res) => {
                setName('');
                setEmail('');
                setPhoneNo('');
                setMessage('');
                return NotificationManager.success('', 'Email Sent');
            })
            .catch((err) => {
                console.log("FAILED", err);
            })
        }
        else {
            return NotificationManager.warning('', 'Invalid Email');
        }
    }
    

    function nameInputHandler(e){
        setName(e.target.value);
    }

    function validateEmail(){
        if(validator.isEmail(email)){return true}
        setEmailError(true);
        return false;
    }

    function emailInputHandler(e){
        setEmail(e.target.value);
    }
    function numberInputHandler(e){
        setPhoneNo(e.target.value);
    }
    function messageInputHandler(e){
        setMessage(e.target.value);
    }

    return(
        <div id="contact" className="index-minus1">
            <StyledContactDiv color="#232D41">
                

                <div className="flexbox-container-contact">
                    <Fade left>
                    <div className="flexbox-item-contact" style={{display: "flex", justifyContent:"center"}}>
                        <Form id="contact" className="contact-form" onSubmit={formSubmitHandler}>
                            <h1 className="contact-header">Contact Me</h1>
                            
                            <div className="grid-container">
                                <div className="grid-item grid-item-name">
                                    <input onChange={nameInputHandler} type="text" value={name} placeholder="Name" className="text-input"/>
                                    <span className="input-border"></span>
                                </div>
                                <div className="grid-item grid-item-email">
                                    <input onChange={emailInputHandler} type="text" value={email} placeholder="Email" className="text-input "/>
                                    <span className={`input-border ${emailError ? "red" : ""}`}></span>
                                    <span style={{fontWeight: 'bold', color: 'red'}}>{emailError}</span>
                                </div>
                                <div className="grid-item grid-item-number">
                                    <input onChange={numberInputHandler} type="text" value={phoneNo} placeholder="Phone Number" className="text-input msg-input"/>
                                    <span className="input-border"></span>
                                </div>
                                <div className="grid-item grid-item-message">
                                    <textarea onChange={messageInputHandler} type="text" value={message} placeholder="Message" className="text-input msg-input"/>
                                    <span className="input-border"></span>
                                </div>
                                <div className="grid-item grid-item-button">
                                    <Button className="message-send" variant="outline-blue" type="submit">Send Message!</Button>
                                </div>
                            </div>

                        </Form>
                        
                    </div>
                    </Fade>
                    <Fade bottom>
                    {/* <div className="flexbox-item-contact map-container">
                        <GoogleMap/>
                    </div> */}
                    </Fade>
                </div>
            </StyledContactDiv>

        </div>
    
    );


}


export default ContactForm;
