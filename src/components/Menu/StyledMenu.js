

// Menu.styled.js
import styled from 'styled-components';


export const StyledMenu = styled.nav`
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.color};
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: fixed;
  width: 50%;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  // box-shadow: ${({isMobile}) => isMobile  ? '': '-2px 0px 2px 1px '} ;
  // box-shadow: ${({open}) => open  ? '-2px 0px 2px 1px ': ''} ;

  @media (max-width: ${({ theme }) => theme.mobile}) {

    width: 100%;
  }


h1 {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem ;
    font-weight: bold;
    letter-spacing: 0.5rem;
    padding-right: 2rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    padding-right: 1rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  @media only screen 
  and (min-device-width : 320px) 
  and (max-device-width : 480px) {
    width: 100%;
    box-shadow: none;
    h1{
        font-size: 2rem;
        padding-right: 0rem;
    }
  }

  @media screen and (max-width: 375px){
    width: 100%;
    box-shadow: none;
    h1{
        font-size: 2rem;
    }
    
  }
`;

export default StyledMenu;
