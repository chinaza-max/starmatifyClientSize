import {Link} from "react-router-dom";
import {useTransition,animated}  from "react-spring"
import {useEffect,useState} from "react";
import {useSelector } from "react-redux";
import "./MainNav2.css";




export default function MainNav2(props) {
    const [items,setItems]=useState([]);
    const isLoggedIn=useSelector(state=> state.isLoggedIn)
    const transition=useTransition(items,{
        config:{ mass: 1, tension: 280, friction: 60 },
        from:{x:100,y:50,opacity:0},
        enter:item=>(next)=>(
          next({x:item.x,y:0,opacity:1,delay:item.delay})
        ),
        leave:{x:100,y:800,opacity:0},
      })

    function select(val){
      
        let elements=document.querySelectorAll('.SelectedLink2')

        console.log(elements)
        elements.forEach((ele)=>{
            ele.classList.remove("active2");
        })
        elements[val].classList.add("active2");
    }

    
  useEffect(()=>{
    setTimeout(()=>{

            if(isLoggedIn){
              setItems(props.NavlinksLoginP)
            }
            else{
            
              setItems(props.NavlinksNotLoginP)
          
              }
  }
    ,1000)
  })

  return (
    <ul className="NavLinkmobile">
              
    {
      transition((style,item)=>
       item?
        <animated.li style={style} className={item.data2}>
        
            {item.data5==="inpage"?
                <a href={item.data4}  onClick={()=>select(item.data3)}>
                    {item.data}
                  <span className="borderSelect"></span>
                </a>
            :
            <Link to={item.data4}  onClick={()=>select(item.data3)}>
              {item.data}
              <span className="borderSelect"></span>
            </Link>  
            }
          
        </animated.li>
       :""
      )
    }  
  </ul>
  )
}
