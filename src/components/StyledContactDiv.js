import styled from "styled-components";


const StyledContactDiv = styled.div`
    background-color: ${(props) => props.color};
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh)* 100);
    font-family: 'Roboto';
    
    h2 {
        color: white;
        position: absolute;
        left: 5%;
        top: 20%;
        font-size: 100px;
    }

    .contact{
        position: absolute;
        left: 5%;
        top: 60%;
        width: 200px;
        font-size: 30px;
        
    }

    

    .typewriter{
        color: white;
        position: absolute;
        left: 5%;
        top: 20%;
        font-family: 'Roboto';
        font-size: 80px;
    }

    

    .main-logo{
        position:absolute;
        z-index: 4;
        right: 20%;
        bottom: 20%;
        transform: rotate(-25deg);
        
        animation: 1s ease-out 0s 1 slideInFromLeft;
        
    }

    @media only screen 
        and (min-device-width : 320px) 
        and (max-device-width : 480px) {
            height: calc(35rem + 100vh);
            .main-logo{
                opacity: 0;
            }

            .typewriter{
                color: white;
                position: relative;
                left: 5%;
                top: 20%;
                font-family: 'Roboto';
                font-size: 60px;
            }

            .contact{
            
                position: relative;
                width: 200px;
                font-size: 30px;
                
            }



        }

    @media screen and (max-width: 375px){
        height: 81.25rem;
        .main-logo{
            opacity: 0;
        }

        .typewriter{
            color: white;
            position: relative;
            left: 5%;
            top: 20%;
            font-family: 'Roboto';
            font-size: 60px;
        }

        .contact{
        
            position: absolute;
            left: 5%;
            top: 60%;
            width: 200px;
            font-size: 30px;
            
        }
    }

    


    @keyframes slideInFromLeft {
        0%{
            opacity: 0;
            transform: translateX(100%);
            
        }
        100%{
            transform: translateX(0) rotate(-25deg);
        }
    }
     


    

`

export default StyledContactDiv;
