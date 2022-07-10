import {Link} from "react-router-dom";
import {useTransition,animated}  from "react-spring"
import {useEffect,useState} from "react";
import "./MainNav2.css";




export default function MainNav2() {
    const [items,setItems]=useState([]);
    const transition=useTransition(items,{
        from:{x:100,y:50,opacity:0},
        enter:item=>(next)=>(
          next({x:item.x,y:0,opacity:1,delay:item.delay})
        ),
        leave:{x:100,y:800,opacity:0},
      })

    function select(val){

    let elements=document.querySelectorAll('.SelectedLink')
    elements.forEach((ele)=>{
        ele.classList.remove("active");
    })
    elements[val].classList.add("active");
    }

    
  useEffect(()=>{
    setTimeout(()=>{
            setItems([{x:0,data:"Home",data2:"SelectedLink  active",
            data3:0,delay:100},{x:0,data:"Service",data2:"SelectedLink",
            data3:1,delay:200},{x:0,data:"Gallery",data2:"SelectedLink",
            data3:2,delay:300},{x:0,data:"Contact",data2:"SelectedLink",
            data3:3,delay:400}])
  
  }
    ,1000)
  },[])

  return (
    <ul className="NavLinkmobile">
              
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
    )
    }  
  </ul>
  )
}
