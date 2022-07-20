import "./MainNav.css";
import {useEffect,useState} from "react";
import {useTheme}  from "../../themeContext";
import img from "../../images/starmatelogo.png";
import {useTransition,animated}  from "react-spring"
import Button from "../styledComponent/ButtonLogin.styled";
import Nav2  from "../MainNav2/MainNav2"
import {Link} from "react-router-dom";
import {useSelector } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Money from "../MoneyNav/MoneyNav"
//import {useSelector } from "react-redux"
//import {DisplayJoinUsPage,DisplayLoginPage}  from "../../Redux/Action"

export default function MainNav() {
  const [items,setItems]=useState([]);
  const [items2,setItems2]=useState(false);
  const isLoggedIn=useSelector(state=> state.isLoggedIn)
  const darkTheme =useTheme()
  const transition=useTransition(items,{
    from:{x:100,y:-200,opacity:0},
    enter:item=>(next)=>(
      next({x:item.x,y:0,opacity:1,delay:item.delay})
    ),
    leave:{x:100,y:800,opacity:0},
  })

  const transition2=useTransition(items2,{
    from:{x:100,y:-200,opacity:0},
    enter:{x:0,y:0,opacity:1},
    leave:{x:100,y:800,opacity:0},
  })

  const NavBarThem={
    backgroundColor:darkTheme?'black':"#285945",
    color:darkTheme?'white':"white",
  }
  function select(val){

    let elements=document.querySelectorAll('.SelectedLink')
    elements.forEach((ele)=>{
        ele.classList.remove("active");
    })
    elements[val].classList.add("active");
  }

  useEffect(()=>{
    setTimeout(()=>{

      if(isLoggedIn){
        setItems([{x:0,data:"Home",data2:"SelectedLink  active",
        data3:0,delay:110},{x:0,data:"Gallery",data2:"SelectedLink",
        data3:1,delay:130},{x:0,data:"Dashboard",data2:"SelectedLink",
        data3:2,delay:150},{x:0,data:"Contact",data2:"SelectedLink",
        data3:3,delay:170}])
      }
      else{
        setItems([{x:0,data:"Home",data2:"SelectedLink  active",
        data3:0,delay:110},{x:0,data:"Service",data2:"SelectedLink",
        data3:1,delay:130},{x:0,data:"Gallery",data2:"SelectedLink",
        data3:2,delay:150},{x:0,data:"Contact",data2:"SelectedLink",
        data3:3,delay:170}])

      }
        setItems2(true)
  }
    ,1000)
  },[isLoggedIn])
  
  return (
    <>
    <nav className="MainNav" style={NavBarThem}>
      
      <ul id="upNav">
        <li id="logo">
          
            {
                transition2((style,item)=>
                 item?
                 <animated.span style={style}>
                  <Link to={"#"}>
                    <img src={img} alt=""/>
                    </Link>
                  </animated.span>
                 :""
              )} 
        </li>
        <li id="middle">
            <ul className="NavLinks">
              {
                transition((style,item)=>
                 item?
                 <animated.li style={style}>
                    <Link to={"#"} className={item.data2} onClick={()=>select(item.data3)}>
                          {item.data}
                        <span className="borderSelect"></span>
                    </Link>
                  </animated.li>
                 :""
              )}  
            </ul>
        </li>
        <li>

        
          {isLoggedIn?
          <>
            <ul id="rightSide">
              <li> <Money/></li>
              <li> <span>fund wallet</span>  </li>
              <li> <span className="AccountCircleIcon"><AccountCircleIcon/></span>  </li>
            </ul>
          </>
          :
            <>
              <span id="first">
                <Button>
                  <h5>
                  login
                  </h5>
                </Button>
             </span>

              <span id="second">
                <Button buttonColorp="true">
                  <h5>
                  SignUp
                  </h5>
                </Button>
              </span>
            </>
          }
        </li>
      </ul>
      <Nav2/>
    </nav>
    </>
  )
}

/*
  {
          transition((style,item)=>
            item?<animated.div className="test" style={style}>{item.data}</animated.div>:""
          )}  
 */