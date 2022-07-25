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
import Service  from "../../components/Cards/ServiceCards/ServiceCards";
import Headers from "../../components/Headers/Headers";
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import OilBarrelOutlinedIcon from '@mui/icons-material/OilBarrelOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import ElectricMeterOutlinedIcon from '@mui/icons-material/ElectricMeterOutlined';
import PlumbingOutlinedIcon from '@mui/icons-material/PlumbingOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import Equipments from "../../components/Equipments/Equipments";
import Features from "../../components/Cards/FeatursCards/FeatursCards"
import Footer from "../../components/Footer/Footer"

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

  const FooterTheme={
    backgroundColor:darkTheme?'black':"rgb(40, 89, 69)",
    color:darkTheme?'black':"white",
  }
  const serviceDescrption=[{type:"CLEANING",description:"Whether you need a deep cleaning or routine maintenance cleaning service for your home, office, factory etc, discover the difference trained workers, a simple and effective quality program, and professional management can make when you hire us. Our edge lies in our wealth of experience gathered over the years in managing high profile cleaning jobs and delivering the desired outcomes.",icon:CleaningServicesOutlinedIcon},
                            {type:"FPSO, TANKS AND VESSEL DESLUDGING",description:"In 2020, we secured partnerships and accreditations including the DPR permit to enable us provide fast, efficient and safe desludging and cleaning services for FPSO using automated cleaning system with High Pressure Jetting and Vacuum Transfer System capable of water jetting and cleaning of the interior surfaces, and evacuating sludge from a depth of over 50meters in FPSO.",icon:OilBarrelOutlinedIcon},
                            {type:"FUMIGATION/PEST CONTROL",description:"With the most modern innovations in pest control and the use of approved products, we provide the most effective pest control services to our clients. Our staff attend certified pest control trainings to remain informed. Over the years we have consistently provided pest control services to multi-nationals, world organizations, government and private establishments, estates and individuals.",icon:PestControlOutlinedIcon},
                            {type:"ELECTRICAL & AIR CONDITIONING (AC)",description:"Whether for your home, office, factory, estate etc, we offer routine check-ups and repairs of the air conditioning and electrical systems in residential and commercial building through testing, monitoring, fixing, and replacing elements of the system. We also provide installations, wiring, general assessment and consultancy. We offer this as an instant, on call, routine and subscription based service.",icon:ElectricMeterOutlinedIcon},
                            {type:"PLUMBING",description:"We offer installation, inspection, replacement and repair of plumbing fixtures. Do you need a scheduled maintenance, on call, or routine onsite inspection and repairs? We are your most preferred choice. We bear no misgivings about delivering your most desired outcomes.",icon:PlumbingOutlinedIcon},
                            {type:"HORTICULTURE/GARDENING",description:"Landscaping and garden maintenance services just got redefined with our bespoke services. With a good understanding of your environment, aesthetics and your needs, we deliver planting, scheduled, on call, and routine landscaping and garden maintenance services  .",icon:GrassOutlinedIcon}]

  const NavlinksLogin=[{x:0,data:"Home",data2:"SelectedLink2  active2",data3:0,delay:100},
                        {x:0,data:"Gallery",data2:"SelectedLink2",data3:1,delay:200},
                        {x:0,data:"Dashboard",data2:"SelectedLink2",data3:2,delay:300},
                        {x:0,data:"Contact",data2:"SelectedLink2",data3:3,delay:400}]
  const NavlinksNotLogin=[{x:0,data:"Home",data2:"SelectedLink2  active2",data3:0,delay:100},
                        {x:0,data:"Service",data2:"SelectedLink2",data3:1,delay:200},
                        {x:0,data:"Gallery",data2:"SelectedLink2",data3:2,delay:300},
                        {x:0,data:"Contact",data2:"SelectedLink2",data3:3,delay:400}]


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
          <Nav NavlinksLoginP={NavlinksLogin}  NavlinksNotLoginP={NavlinksNotLogin}/>
          <section id="section1">
            <ul>
              <li>
                <div id="Heading">
                    <h3 id="HeadingContent"> </h3>
                </div>
                <div id="paragraph">
                    <p>While you are busy with your  
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
    <div className="overLay"></div>
      <ul>
        <li>
          <h3>
            Entrust  us with your home  today And <br/>
            Track your services via our web App
          </h3>
          <a href="/#">
            Features
          </a>

          <div></div>
        </li>
        <li>
          <img src={mobile} alt=""/>
        </li>
      </ul>
      
    </section>
    <section id="section4">
      <Headers titleP="We Are a Leading Cleaning Company in Nigeria." pagraphP="We understand that the greatest ‘nightmare’ of facility owners are issues relating to facility management. We therefore lift off the burden of these ‘distractions’ so as to improve quality of life and the productivity of our clients who now concentrate on the core of their business and concerns." pagraphP2="We deliver your most desired facility management outcomes made possible through our experience over the years by paying attention to details, professionalism and constant training"/>
      <div className="services"> 
        <Service serviceDescrptionP={serviceDescrption}/>
      </div>
    </section>
    <section id="section5">
      <h2> 
        Our Professional  Equipment 
      </h2>
      <Equipments/>
    </section>
    <section id="section6">
      <h2>
        FEATURES
      </h2>
      <p> 
      what makes ous stand out
      </p>
      <div>
          <Features/>
      </div>
    </section>
    <section id="section7" style={FooterTheme}>
        <Footer/>
    </section>
    </div>
  )
}
