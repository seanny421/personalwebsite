import './App.css';
import {Link, animateScroll as scroll} from "react-scroll";
import Header from './components/ResponsiveHeader.jsx';
import About from './components/About';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import ResponsiveHeader from './components/ResponsiveHeader.jsx'; 

{/* tested ResponsiveHeader in App instead of Header from components, */}
{/* added way to get vh in index.html using javascript - better for mobile */}
function App() {
  const [open, setOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 1000);
  }, [])	

    
        
  return (   
    <div>
    <style type="text/css">
          {`
          .btn-outline-blue {
            // background-color: #00E0FF;
            border-color: #00E0FF;
            font-size: 1.2rem;
            color: white;
            // width: 130px;
            
          }
          .btn-outline-blue:hover{
            background-color: #00E0FF;
            color: #0e1729;
          }

          .btn-hot-pink{
            background-color: #d53a6d;
            color: white;
            font-weight: bold;
          }

          `}
        </style>
      {/* <NotificationContainer className="stuff pt-2"/> */}
      {/* <ReactNotification/> */}
      <Navbar className="navbar" open={open} setOpen={setOpen} isMobile={isMobile}/>
      
      <NotificationContainer></NotificationContainer>
      {/* <Header isMobile={isMobile}/> */}
      <ResponsiveHeader isMobile={isMobile}></ResponsiveHeader>
      <About isMobile={isMobile}/>
      <ContactForm isMobile={isMobile}/>
      {/* <Section title={"about"}></Section> */}

    </div>
    
  );
}


export default App;
