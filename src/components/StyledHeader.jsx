import styled from "styled-components";


const StyledHeader  = styled.div`
    background-color: ${(props) => props.color};
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
 

    padding-bottom: 1rem;

    
    h2 {
        color: white;
        position: absolute;
        left: 5%;
        top: 20%;
        font-size: 100px;
    }

    .contact{
        // margin-top: 2rem;
        position: relative;

        // left: 5%;
        // top: 140%;
        // margin-left: 5rem;
        width: 200px;
        // height: 75px;
        font-size: 30px;
        
    }




    

    .typewriter{
        padding: 1rem;
        color: white;
        position: relative;
        left: 5%;
        padding-top: 10vh;
        font-family: 'Roboto';
        font-size: 4.5vw;
    }

.typewriter-mobile { 
        padding-top: 20%;
    }


    .relative {
        position: relative;
    }

.header-flexbox-container {
        display: flex;
        justify-content: space-between;
        // justify-content: space-around;
        align-items: center;
    }

    .header-flexbox-item{
        width: 40%;
        // width: 70%;
        /* height: 500px; */
        margin: 1%;
    }


    .test {
        width: 100%;
    }
    

    .main-logo{
        padding-top: 15vh;
        // padding-left: 40rem; 
        position:relative;
        // overflow: hidden;
        z-index: 4;
        // top: 10%;
        // bottom: -10%;
        transform: rotate(-25deg);
        
        // animation: 1s ease-out 0s 1 slideInFromLeft;
        
    }

    .flexbox-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        height: 100%;
    }

    .flexbox-item{
        width: 45%;
        margin: 2rem;
        padding: 1rem;
        border: 2px solid #333;
        height: 50vh;

    }

    

    ul li {
        padding: 1rem;
        list-style: none;
        color: white;
        font-size: 2rem;
    }

    .heading-underline-pricing{
        display: inline-block;
        background: #00E0FF;
        height: 2px;
        width: 50%;
    }




    // desktops


    @media only screen 
    and (min-width : 320px) 
    and (max-width : 480px) {
        // height: calc(35rem + 100vh);
        // height: 100vh;
        .main-logo{
            opacity: 0;
        }

        .typewriter{
            color: white;
            position: relative;
            left: 5%;
            top: 15%;
            font-family: 'Roboto';
            font-size: 6.5vh;
            // display: box;
        }

        .contact{
        
            position: absolute;
            // padding-top: 2rem;
            margin-top: 1rem; 
            // left: 5%;
            // top: 60%;
            width: 40vw;
            // width: 110%;
            // height: 75px;
            height: 15vw;
            font-size: 7vw;
            transition: all 1s ease;
            
        }



    }

    // @media screen and (max-width: 2560px){
    //     height: 897px;

    // }

    // @media screen and (min-device-width: 1920px){
    //     height: 58.563rem;
    // }

    // @media screen and (max-width: 375px){
    //     height: 812px;
    //     .main-logo{
    //         opacity: 0;
    //     }

    //     .typewriter{
    //         color: white;
    //         position: relative;
    //         left: 5%;
    //         top: 20%;
    //         font-family: 'Roboto';
    //         font-size: 60px;
    //         // display: box;
    //     }

    //     .contact{
        
    //         position: absolute;
    //         left: 5%;
    //         top: 60%;
    //         width: 200px;
    //         // height: 75px;
    //         font-size: 30px;
            
    //     }
    // }

    


    @keyframes slideInFromLeft {
        0%{
            opacity: 0;
            transform: translateX(100%) rotate(0);
            
        }
        100%{
            transform: translateX(0) rotate(-25deg);
        }
    }
     


    

`

export default StyledHeader;
