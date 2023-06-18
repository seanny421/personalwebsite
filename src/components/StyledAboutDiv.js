import styled from "styled-components";


const StyledAboutDiv = styled.div`
    background-color: ${(props) => props.color};
    width: 100%;
    height: 100%;
    padding: 1rem;
    /* height: calc(var(--vh, 1vh) * 100); */
    font-family: 'Roboto';


    .flexbox-container-about{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
      }

      .about-heading{ 
          color:#00E0FF;
          font-size: 3rem;
          /* margin-top: 2rem; */
      }
      
      .flexbox-item-about{
        margin: 1rem;
        width: 45%;
      }
      
      .flexbox-item-about p{
        color: white;
        font-size: 1.5rem;
      }
      
      
      .skill-heading {
        font-size: 2rem;
        color: white;
        padding: 3rem 0rem 1rem 0rem;
      }
      
      .bgblue{
        background-color: #00E0FF;
        height: 2px;
      }
      
      .bgpink{
        background-color:#FF01B8;
        height: 2px;
      }
      
      .width-9{
        width: 90%;
      }
      
      .width-8 {
        width: 80%;
      }
      
      
      .width-7 {
        width: 70%;
      }
      
      
      .width-6 {
        width: 60%;
      }
      
      .width-5 {
        width: 50%;
      }
      
      .width-4 {
        width: 4%;
      }
      
      
      
      .skill-bar{
        position: relative;
        background-color: #707070;
        width: 100%;
        top: -10px;
        height: 2px;
      }
      

    
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

    


    @media only screen 
    and (max-width: 660px){
        
        {/* height: 81.25rem; */}
        .flexbox-item-about p{
            color: white;
            font-size: 1.1rem;
        }
        
    }


    @media only screen 
    and (min-width: 490px)
    and (max-width : 1220px) {
      .flexbox-item-about p {
        font-size: 2vw;
      }

      .flexbox-item-about h1{
        font-size: 5vw;
      }

      .skills-div h1{
        font-size: 3vw;
      }

      .skill-heading{
        padding: 5vh 0rem 5vh 0rem;
      }
    /* Styles */
    }


    @media only screen 
        and (min-width : 320px) 
        and (max-width : 480px) {
            
            {/* height: calc(var(--vh, 1vh) * 180); */}
            height: calc(45rem + 100vh);
            .about-heading{ 
                color:#00E0FF;
                font-size: 5rem;
            }

            .flexbox-container-about{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            align-content: center;
            }


            .about-heading{
            color:#00E0FF;
            padding-top: 2rem;
            font-size: 3rem;
            }

            .flexbox-item-about{
            margin: 2rem;
            width: 65%;
            }

            .flexbox-item-about p{
            color: white;
            font-size: 1.1rem;
            }

            .flexbox-item-about h1{
              font-size: 10vw;
            }

            .skills-div h1{
              font-size: 9vw;
            }


            .skill-heading {
            color: white;
            padding: 2rem 0rem 2rem 0rem;
            }




            .skill-bar{
            position: relative;
            background-color: #707070;
            width: 100%;
            top: -10px;
            height: 2px;
            }



        }

    @media screen and (max-width: 375px){
        {/* height: 81.25rem; */}
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

export default StyledAboutDiv;
