import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./AchieveMentSlide.css"

import image from "../../images/partner/image1.jpg";
import image2 from "../../images/partner/image2.jpg";
import image3 from "../../images/partner/image3.jpg";





const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  

export default function AchieveMentSlide() {
  return (
    <Carousel responsive={responsive}   arrows={false} infinite={true} autoPlay={true}  autoPlaySpeed={7000}  containerClass="carousel-container">
        <div> <img src={image} alt=""/></div>
        <div><img src={image2} alt=""/></div>
        <div> <img src={image} alt=""/></div>
        <div><img src={image2} alt=""/></div>
        <div> <img src={image3} alt=""/></div>
        <div><img src={image2} alt=""/></div>
        <div> <img src={image} alt=""/></div>
        <div><img src={image2} alt=""/></div>
        <div> <img src={image3} alt=""/></div>
        <div><img src={image2} alt=""/></div>
        <div> <img src={image} alt=""/></div>
        <div><img src={image2} alt=""/></div>
        <div> <img src={image3} alt=""/></div>
      
    </Carousel>
  )
}
