import React from 'react';
import { StyledMenu } from './StyledMenu';
import {Link} from "react-scroll";
import ScrollToButton from "../Scroll/ScrollToButton";

const Menu = ({open, setOpen, isMobile}) => {

  function closeMenu(){

    setOpen(false);

  }
// this is a something
  
  return (
    <StyledMenu open={open} isMobile={isMobile} color="#0e1729">
      
      
      <ScrollToButton style={{cursor: 'pointer'}}  toId="home" duration={500}>
      <h1 onClick={closeMenu} style={{cursor:'pointer'}}>Home<i style={{paddingLeft: '2rem'}} className="fas fa-home"></i></h1>
      </ScrollToButton>
      <ScrollToButton toId="about" duration={500}>
      <h1 onClick={closeMenu} style={{cursor:'pointer'}}>About<i style={{paddingLeft: '2rem'}} className="fas fa-address-card"/></h1>
      </ScrollToButton>
     <ScrollToButton toId="contact" duration={500}>
      <h1 onClick={closeMenu} style={{cursor:'pointer'}}>Contact<i style={{paddingLeft: '2rem'}} className="fas fa-phone"></i></h1>
      </ScrollToButton>

    </StyledMenu>
  )
}
export default Menu;
