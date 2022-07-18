import "./Home.css";
import Nav from "../../components/MainNav/MainNav"
import {useTheme}  from "../../themeContext"
import Typewriter from 'typewriter-effect/dist/core';
import {useEffect,useState} from "react";
import Button from "../../components/styledComponent/Button.style";
import  Form from "../../components/Form/Form"
import PhoneIcon from '@mui/icons-material/Phone';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AnimatedBg from "@bulletlogic/react-animated-bg";
import Price from "../../components/Price/Price"
import Slide from "../../components/AchieveMentSlide/AchieveMentSlide"

import mobile from "../../images/mobile.png"
import image from "../../images/image9.jpg"
import image2 from "../../images/image6.jpg"
import image3 from "../../images/image9.jpg"
import image4 from "../../images/image6.jpg"



export default function Home() {
  const darkTheme =useTheme()

  const imagesList = [
    `url(${image})`,
    `url(${image2})`,
    `url(${image3})`,
    `url(${image4})`
  ];


  /*
  THEMES
  */
  const HomePageTheme={
    backgroundColor:darkTheme?'black':"white",
    color:darkTheme?'black':"black",
  }
  const buttonTheme={
    backgroundColor:darkTheme?'black':"rgba(40,89,69,0.6)",
    color:darkTheme?'black':"green",
  }

  useEffect(()=>{

    let heading = document.getElementById('HeadingContent');
    let typewriter = new Typewriter(heading, {
      delay: 110,
      devMode:false
    });

  typewriter
  .pauseFor(2500)
  .typeString('Professional <br/> chinaza s')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('cleaning and maintaince  service in<br/> Nigeria ')
  .pauseFor(1000)
  .callFunction(function(state) {
    state.elements.cursor.style.display = 'none';
  })
  .start()

    /*
    setTimeout(()=>{
     
      
  }
    ,1000)

    */
  },[])

  return (
    <div className="Home" style={HomePageTheme}  >
    
    <div className="section-wrap">
      <AnimatedBg
        colors={imagesList}
        duration={6}
        delay={10}
        timingFunction="ease-out"
        className="section-styles">
          <Nav/>
          <section id="section1">
            <ul>
              <li>
                <div id="Heading">
                    <h3 id="HeadingContent"> </h3>
                </div>
                <div id="paragraph">
                    <p>While you are busy with your <br/> 
                      bussiness we would be busy<br/> 
                      putting your place in order<br/> 
                    </p>
                </div>
                <div id="button">
                  <ul>
                    <li>
                      <span id="call">
                        {console.log(buttonTheme.color)}
                        <Button  id="callButton" ColorP="white" buttonColorP={buttonTheme.backgroundColor} borderColorP={buttonTheme.color} >
                        
                        <h5>
                          <PhoneIcon className="icons"/>
                          <span>
                            call us
                          </span>
                        </h5>
                        </Button>
                      </span>
                    </li>
                    <li>
                    <span id="video">
                        <Button  id="videoButton" ColorP="white" buttonColorP="transparent" borderColorP={buttonTheme.color}>
                        <h5>
                          <PlayCircleOutlineIcon  className="icons"/>
                          <span>
                          watch video
                          </span>
                        </h5>
                        </Button>
                      </span>
                    </li>

                  </ul>
                </div>

                <Price/>

              </li>
              <li>
                  <Form typeP="instant" titleP="instant service request" buttonTypeP="Request a qoute"/>
              </li>
            </ul>
          </section>
      </AnimatedBg>
    </div>

    <section id="section2">
      <Slide/>
    </section>

    <section id="section3">
      <ul>
        <li>
          <h3>
            Entrust  us with your home  today And <br/>
            Track your services via our web App
          </h3>
          <a href="/#">
            services
          </a>

          <div></div>
        </li>
        <li>
          <img src={mobile} alt=""/>
        </li>
      </ul>
    </section>

    </div>
  )
}
