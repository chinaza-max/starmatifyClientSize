import React from "react";
import "./Form.css"
import {useState,useEffect,useRef }  from "react";
import Button from "../styledComponent/SelectButton.styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { animated, useSpring } from "react-spring";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useSelector } from "react-redux";
import {DisplayJoinUsPage,DisplayLoginPage}  from "../../Redux/Action"
//import useAxiosPost from '../../Hooks/useAxiosPost';




export default   function Form(props) {

  const[services,setService]=useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [buildinglocation, setBuildinglocation] = useState("Home");
  const [additionalServiceCount, setAdditionalServiceCount] = useState(1);
  const count = useRef();
  const serviceId = useRef(0);
  const [myService, setMyservice] = useState([]);
  const setUpadtemyService=useRef([])
  const [styles1, api1] = useSpring(() => ({ height: "290px" }));
  const isLoggedIn=useSelector(state=> state.isLoggedIn)

    const[title,setTitle]=useState(props.title);
    const[file,setFile]=useState();
    const[apidatas, setApidatas]=useState('');


  //const extendForm
    //const {datas}=useAxiosPost(apidatas)
/*
    const handleChange=(event)=>{
        const {value}=event.target
        setTitle(value)
    }
    const handleChange2=(event)=>{
        if(event.target.files[0]!==undefined){
            setFile(event.target.files[0]);
        }
    }*/

    const removeService=(selector,index)=>{

     
      if(index===0){
        IdAvailable(1)
      }
      else{
        IdAvailable(0)
      }
      console.log(selector)
      setMyservice(setUpadtemyService.current.filter(function (e, i) {
        return e[0].props.id !== selector;
      }))

      if(count.current===1){
        api1.start({ height:"290px" })
      }
      if(count.current===2){
        api1.start({ height:"290px" })
      }
      else if(count.current===3){
        api1.start({ height:"600px" })
      }
      setAdditionalServiceCount(count.current-1)
    }


    const addService=()=>{
      let arr=[]
      if(additionalServiceCount===1){
        api1.start({ height:"600px" })
      }
      else if(additionalServiceCount===2){
        api1.start({ height:"880px" })
      }

      const serviceKey=serviceId.current;
        arr.push(
          <li key={serviceKey} className="services" id={`services${serviceKey}`}>
              <div className="label"> <label>Select service:</label></div>
              <select className="select"  id="services" name="cars">
                {optionService}
              </select>

              <div className="label"> <label>Frequency:</label></div>
              <select className="select"  id="services" name="cars">
                {optionService}
              </select>

              <div className="label"> <label>Duration:</label></div>
              <select className="select"  id="services" name="cars">
                {optionService}
              </select>
              
              <div className="label"> <label>Additional info:</label></div>
              <textarea className="textarea1" placeholder="specify any other info ........">
              </textarea>
              <span className="DeleteIcon" onClick={()=>removeService(`services${serviceKey}`,serviceKey)}>
                <DeleteIcon/>
              </span>
            </li>
        );
        
        IdAvailable(serviceId.current)
        setMyservice(myService => [arr,...myService] );
        setAdditionalServiceCount(additionalServiceCount+1)
    }

    const IdAvailable=(val)=>{
      if(val===0){
        serviceId.current=1
      }
      else{
        serviceId.current=0
      }
    }
    const handleBuildingLocation=(val)=>{
      setBuildinglocation(val)
    }
    const select=(index,select)=>{
      let elements=document.querySelectorAll(`.${select}`)
      elements.forEach((ele)=>{
          ele.classList.remove("active");
      })
      elements[index].classList.add("active");
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('file',file);
        formData.append('title',title);
        formData.append('bookName',props.bookName);
        setApidatas({url:props.url,data:formData})
    }
 
/*
    useEffect(()=>{
      //console.log(apidata.url)
     
      console.log(error)
      if(error!=="bad"){
       // swal("Good job!",datas, "success");
      }
      else{
        swal(datas);
      }
  
      return ()=>{
        //source.cancel('Operation canceled by the user.');
      }
    },[datas,apidatas,error])
  */


  const optionService=services.map((val,index)=>{
    return(
      <option key={index} value={val.value}>{val.display}</option>
    )
  })


  useEffect(()=>{
    setService([{value:"cleaning",display:"cleaning"},
              {value:"fumigation",display:"fumigation"},
              {value:"electrical service",display:"electrical service"},
              {value:"electrical service",display:"electrical service"}])

    setUpadtemyService.current=myService;
    count.current = additionalServiceCount;
  },[additionalServiceCount,api1,myService])


  return (
    <section className="FormContainer">
      <form onSubmit={(e)=>{onSubmit(e)}}>
        <div id="title">{props.titleP}</div>
        <animated.div id="content" style={styles1}>

          <div className="label"> <label>Select service:</label></div>
          <select className="select"  id="services" name="cars">
            {optionService}
          </select>
          
          <ul className="selectSection" id="selectSection1">
            <li>
              <Button widthP="88" heightP="30" className="buttons1 active" onClick={()=>{select(0,"buttons1"); handleBuildingLocation("Home")}}>Home</Button>
            </li>
            <li>
              <Button widthP="88" heightP="30"  className="buttons1" onClick={()=>{select(1,"buttons1");handleBuildingLocation("Office")}}>Office</Button>
            </li>
            <li>
              <Button widthP="88" heightP="30"  className="buttons1" onClick={()=>{select(2,"buttons1");handleBuildingLocation("Others")}}>Others</Button>
            </li>
          </ul>


          {buildinglocation==="Home"?
             <>
              <div className="label"> <label>House type:</label></div>
              <ul className="selectSection"  id="selectSection2">
                <li>
                  <Button widthP="138" heightP="30" className="buttons2 active" onClick={()=>select(0,"buttons2") }>Flat </Button>
                </li>
                <li>
                  <Button widthP="138" heightP="30"  className="buttons2" onClick={()=>select(1,"buttons2")}>Duplex</Button>
                </li>
              </ul>
             </>
          :
          <>
            <div className="label"> <label>House type:</label></div>
            <textarea className="textarea2" placeholder="specify any other info ........">
            </textarea>
          </>
          }

          
          <ul className="selectSection"  id="selectSection3">
            <li>  
              <div className="label"> <label>No of rooms:</label></div>
              <select className="select "  id="rooms" name="cars">
                {optionService}
              </select>
            </li>
            <li>
              <div className="label"> <label>Frequency:</label></div>
              <select className="select"  id="frequency" name="cars">
                {optionService}
              </select>
            </li>
          </ul>


          {props.typeP!=="instant"?
             <>
              <ul className="selectSection"  id="selectSection4">
              <li>
                <div className="label"> <label>No of staff:</label></div>
                <select className="select "  id="staff" name="cars">
                  {optionService}
                </select>
              </li>
              <li>
                <div className="label"> <label>Duration:</label></div>
                <select className="select"  id="frequency" name="cars">
                  {optionService} 
                </select>
              </li>
            </ul>
  
            <ul className="selectSection"  id="selectSection5">
              <li>
                <div className="label"> <label>Delivery start date:</label></div>
                <DatePicker className="schedule"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormatCalendar={"MMM yyyy"}
                  minDate={new Date()}
                  showMonthYearDropdown/>
                  <CalendarTodayIcon className="icons"/>
              </li>

              <li>
                <div className="label"> <label>service delivery start time:</label></div>
                <DatePicker className="schedule"
                  selected={startTime}
                  onChange={(date) => setStartTime(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="start time"
                  dateFormat="h:mm aa"/>
                  <AccessTimeFilledIcon className="icons"/>
              </li>
            </ul>

  
             <ul className="selectSection"  id="selectSection6">
              <li>
                <div className="label"> <label>service delivery end time:</label></div>
                <DatePicker className="schedule"
                  selected={endTime}
                  onChange={(date) => setEndTime(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="End time"
                  dateFormat="h:mm aa"/>
                 <AccessTimeFilledIcon className="icons"/>
              </li>
            </ul>
              </>
          :
          ''
          }
        
          <div className="label"> <label>Additional info:</label></div>
          <textarea className="textarea1" placeholder="specify any other info ........">
          </textarea>
          
          <ul id="additionalService">
            {myService}
          </ul>


          {additionalServiceCount===3?
           ''
          :
          <span className="AddIcons" onClick={()=>addService()}>
           <span className="action"> add another service</span><AddCircleOutlineIcon/>
          </span>
          }

        </animated.div>
        {isLoggedIn===false?
          <div id="userDetails">
          <div className="label"> <label>User Details:</label></div>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Phone number"></input>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Address"></input>
        </div>
        :
        ''
        }
        
        <button>{props.buttonTypeP}</button>
      </form>
    </section>
  );
}
