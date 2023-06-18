import React, {useState, Component} from "react";
import { Button, FormGroup, Form} from "react-bootstrap";
import GoogleMap from "./GoogleMap";
import validator from "validator";
import StyledContactDiv from "../StyledContactDiv";
import { send } from "emailjs-com";

import {NotificationContainer, NotificationManager} from 'react-notifications';


export default class Experimental extends Component {
    createNotification = (type) => {
        return () => {
          switch (type) {
            case 'info':
              NotificationManager.info('Info message');
              break;
            case 'success':
              NotificationManager.success('Success message', 'Title here');
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
          }
        };
      };


      formSubmitHandler(e){
          e.preventDefault();
          return NotificationManager.success('', 'Email Sent');
      }

      render() {
        return(
            <div id="contact" className="index-minus1">

            <StyledContactDiv color="#232D41">
                <NotificationContainer className="pt-5"/>

                <div className="flexbox-container-contact">
                    
                    <div className="flexbox-item-contact">
                        {/* <form id="contact" className="contact-form" autoComplete="off" onSubmit={formSubmitHandler}> */}
                        <Form id="contact" className="contact-form" onSubmit={this.formSubmitHandler}>
                            <h1 className="contact-header">Contact Me</h1>
                            
                            <div className="grid-container">

                                

                                <div className="grid-item grid-item-name">
                                    <input type="text" placeholder="Name" className="text-input"/>
                                    <span className="input-border"></span>
                                    
                                </div>
                                <div className="grid-item grid-item-email">
                                    
                                    <input type="text" placeholder="Email" className="text-input "/>
                                    <span className="input-border"></span>
                                    <span style={{fontWeight: 'bold', color: 'red'}}>Stuff</span>
                                </div>
                                <div className="grid-item grid-item-number">
                                    <input type="text" placeholder="Phone Number" className="text-input msg-input"/>
                                    <span className="input-border"></span>
                                </div>
                                <div className="grid-item grid-item-message">
                                    <textarea type="text" placeholder="Message" className="text-input msg-input"/>
                                    <span className="input-border"></span>
                                </div>
                                <div className="grid-item grid-item-button">
                                    <Button className="message-send" variant="outline-blue" type="submit">Send Message!</Button>

                                </div>
                                
                            </div>

                        {/* </form> */}
                        </Form>
                        
                    </div>
                    <div className="flexbox-item-contact map-container">
                        <GoogleMap/>
                    </div>
                </div>
            </StyledContactDiv>
            </div>

        );

      }


}



// function ContactForm(){
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [phoneNo, setPhoneNo] = useState('');
//     const [message, setMessage] = useState('');
    

//    function createNotification(type){
//         return () => {
//             switch (type) {
//               case 'info':
//                 NotificationManager.info('Info message');
//                 break;
//               case 'success':
//                 NotificationManager.success('', 'Email Sent');
//                 break;
//               case 'warning':
//                 NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
//                 break;
//               case 'error':
//                 NotificationManager.error('Error message', 'Click me!', 5000, () => {
//                   alert('callback');
//                 });
//                 break;
//             }
//           };
//     };

//     // createNotification = (type) => {
//     //     return () => {
//     //       switch (type) {
//     //         case 'info':
//     //           NotificationManager.info('Info message');
//     //           break;
//     //         case 'success':
//     //           NotificationManager.success('Success message', 'Title here');
//     //           break;
//     //         case 'warning':
//     //           NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
//     //           break;
//     //         case 'error':
//     //           NotificationManager.error('Error message', 'Click me!', 5000, () => {
//     //             alert('callback');
//     //           });
//     //           break;
//     //       }
//     //     };
//     //   };
    



//     function formSubmitHandler(e){
        


//         e.preventDefault();
//         // createNotification('success');
//         // emailjs.sendForm('service_5qr6exq', 'template_u90o3dd', {name, email, phoneNo, message}, 'user_mwjxexZXKZUf3eOQtdS0a')
//         if(validateEmail === true){
//             // createNotification('success');
//             send(
//                 'service_5qr6exq',
//                 'template_u90o3dd',
//                 {name, email, phoneNo, message},
//                 'user_mwjxexZXKZUf3eOQtdS0a'
//             )
//             .then((res) => {
//                 createNotification('success');
//                 console.log("SUCCESS", res.status, res.text);
//             })
//             .catch((err) => {
//                 console.log("FAILED", err);
//             })
//         }
//         else {
//             createNotification('error');
//         }
//     }
    

//     function nameInputHandler(e){
//         setName(e.target.value);
//     }

//     function validateEmail(){
//         if(validator.isEmail(email)){setEmailError(''); return true}
//         setEmailError('Email Invalid');
//         return false;
//     }

//     function emailInputHandler(e){
//         setEmail(e.target.value);
//     }
//     function numberInputHandler(e){
//         setPhoneNo(e.target.value);
//     }
//     function messageInputHandler(e){
//         setMessage(e.target.value);
//     }

//     return(
//         <div id="contact" className="index-minus1">

//             <StyledContactDiv color="#232D41">
//                 <NotificationContainer className="pt-5"/>

//                 <div className="flexbox-container-contact">
                    
//                     <div className="flexbox-item-contact">
//                         {/* <form id="contact" className="contact-form" autoComplete="off" onSubmit={formSubmitHandler}> */}
//                         <Form id="contact" className="contact-form" onSubmit={formSubmitHandler}>
//                             <h1 className="contact-header">Contact Me</h1>
                            
//                             <div className="grid-container">

                                

//                                 <div className="grid-item grid-item-name">
//                                     <input onChange={nameInputHandler} type="text" placeholder="Name" className="text-input"/>
//                                     <span className="input-border"></span>
                                    
//                                 </div>
//                                 <div className="grid-item grid-item-email">
                                    
//                                     <input onChange={emailInputHandler} type="text" placeholder="Email" className="text-input "/>
//                                     <span className="input-border"></span>
//                                     <span style={{fontWeight: 'bold', color: 'red'}}>{emailError}</span>
//                                 </div>
//                                 <div className="grid-item grid-item-number">
//                                     <input onChange={numberInputHandler} type="text" placeholder="Phone Number" className="text-input msg-input"/>
//                                     <span className="input-border"></span>
//                                 </div>
//                                 <div className="grid-item grid-item-message">
//                                     <textarea onChange={messageInputHandler} type="text" placeholder="Message" className="text-input msg-input"/>
//                                     <span className="input-border"></span>
//                                 </div>
//                                 <div className="grid-item grid-item-button">
//                                     <Button className="message-send" variant="outline-blue" type="submit">Send Message!</Button>

//                                 </div>
                                
//                             </div>

//                         {/* </form> */}
//                         </Form>
                        
//                     </div>
//                     <div className="flexbox-item-contact map-container">
//                         <GoogleMap/>
//                     </div>
//                 </div>
//                 <button onClick={createNotification('success')}></button>
//             </StyledContactDiv>

//         </div>
    
//     );


// }


// export default ContactForm;