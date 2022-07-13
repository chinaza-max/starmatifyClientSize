import "./Home.css";
import Nav from "../../components/MainNav/MainNav"
import {useTheme}  from "../../themeContext"
import Typewriter from 'typewriter-effect/dist/core';
import {useEffect,useState} from "react";
import Button from "../../components/styledComponent/Button.style";
import  Form from "../../components/Form/Form"
import PhoneIcon from '@mui/icons-material/Phone';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function Home() {
  const darkTheme =useTheme()

  const HomePageTheme={
    backgroundColor:darkTheme?'red':"white",
    color:darkTheme?'red':"black",
  }

  useEffect(()=>{

    let heading = document.getElementById('HeadingContent');
    let typewriter = new Typewriter(heading, {
      delay: 75,
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
    <div className="Home" style={HomePageTheme}>
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
                    <Button  id="callButton" ColorP="white" buttonColorP="rgba(40, 89, 69, 0.6);" borderColorP="black" >
                    
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
                    <Button  id="videoButton" ColorP="black" buttonColorP="white" borderColorP="green">
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
          </li>
          <li>
              <Form typeP="instant" titleP="instant service request" buttonTypeP="Request a qoute"/>
          </li>
        </ul>
      </section>
    
    </div>
  )
}


