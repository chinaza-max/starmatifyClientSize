import './Gallery.css';
import Button from "../../components/styledComponent/Button.style";
import React,{useState,useEffect} from 'react'
import {useTheme}  from "../../themeContext"
import MyGallery from '../../components/materialUI/Gallery';
import img1 from "../../images/imageG1.jpg"
import img2 from "../../images/imageG2.jpg"
import img3 from "../../images/imageG3.jpg"
import img4 from "../../images/imageG4.jpg"
import img5 from "../../images/imageG5.jpg"
import img6 from "../../images/imageG6.jpg"
import img7 from "../../images/imageG7.jpg"
import img8 from "../../images/imageG8.jpg"
import img9 from "../../images/imageG9.jpg"
import img10 from "../../images/imageG10.jpg"
import img11 from "../../images/imageG11.jpg"
import img12 from "../../images/imageG12.jpg"
import img13 from "../../images/imageG13.jpg"
import img14 from "../../images/imageG14.jpg"
import img15 from "../../images/imageG15.jpg"
import img16 from "../../images/imageG16.jpg"
import img17 from "../../images/imageG17.jpg"
import img18 from "../../images/imageG18.jpg"
import img19 from "../../images/imageG19.jpg"
import img20 from "../../images/imageG20.jpg"
import img21 from "../../images/imageG21.jpg"
import img22 from "../../images/imageG22.jpg"
import img23 from "../../images/imageG23.jpg"


export default function Gallery() {
  const darkTheme =useTheme()
  const [view,setView] =useState("image")

  function selectView(val){
    setView(val)
  }


  const buttonTheme={
    backgroundColor:darkTheme?'black':"rgba(40,89,69,0.6)",
    color:darkTheme?'black':"green",
  }

  useEffect(()=>{

  },[view])
  return (
    <div className='Gallery'>
        <div className='section1'>
          <ul className='buttonContainer'>
            <li>
              <Button  id="callButton" ColorP="white" onClick={()=>{selectView("image")}} buttonColorP={view==="image"?buttonTheme.backgroundColor:"transparent"} borderColorP={buttonTheme.color} >     
                <h5>
                  
                  <span>
                    Image
                  </span>
                </h5>
              </Button>
            </li>

            <li>
                <Button  id="callButton" ColorP="white" onClick={()=>{selectView("video")}}  buttonColorP={view==="video"?buttonTheme.backgroundColor:"transparent"} borderColorP={buttonTheme.color} >     
                    <h5>
                    
                    <span>
                      Video
                    </span>
                  </h5>
                </Button>
            </li>
          </ul>
        </div>

       {view==="image"?
          <div className='section2'>
            <MyGallery itemDataP={itemData}  itemDataP2={itemDataUrl} />
          </div>:''
        }
        
    </div>
  )
}

const itemData = [
  {
    img:img1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
     img:img2,
    title: 'Burger',
  },
  {
     img:img3,
    title: 'Camera',
  },
  {
     img:img4,
    title: 'Coffee',
    cols: 2,
  },
  {
     img:img5,
    title: 'Hats',
    cols: 2,
  },
  {
     img:img6,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
     img:img7,
    title: 'Basketball',
  },
  {
     img:img8,
    title: 'Fern',
  },
  {
     img:img9,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
     img:img10,
    title: 'Tomato basil',
  },
  {
     img:img11,
    title: 'Sea star',
  },
  {
     img:img12,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img13,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img14,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img15,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img16,
    title: 'bb',
    rows: 2,
    cols: 2,
  },
  {
     img:img17,
    title: 'ooo',
    cols: 2,
  },
  {
     img:img18,
    title: 'Biiiike',
    cols: 2,
  },
  {
     img:img19,
    title: 'Bikoooe',
    rows: 1,
    cols: 2,
  },
  {
     img:img20,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img21,
    title: 'Bipke',
    rows: 2,
    cols: 2
  },
  {
     img:img22,
    title: 'Bike',
    cols: 2,
  }
  ,
  {
     img:img23,
    title: 'Bike',
    cols: 2,
  }
];


const itemDataUrl = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
    img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23
];

