import './Profile.css';
import img4 from "../../../images/image8.jpg";
import Form from "../../../components/Form2/Form2";
import {useEffect,useState} from 'react';



export default function Profile(props) {
  const [disiplayForm,setDisiplayForm]=useState(false)

  function ToggleOverlay(val){
    setDisiplayForm(val)
  }

 
  return (
    <div className='Profile'> 
        <figure className="snip1336 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg" alt="sample74" />
            <figcaption>
                <img src={img4} alt="avatar" className="profile" />
                <h2>{props.dataP.data1} {" "+props.dataP.data2}</h2>
                <h6>{props.dataP.data3}</h6>
                <h6>{props.dataP.data5}</h6>
                <p>{props.dataP.data4}</p>
                <a href={img4} className="follow" onClick={()=>ToggleOverlay(true)} >Edit Profile</a>
                <a href={img4} className="follow" onClick={()=>ToggleOverlay(true)} >Edit Profile</a>
            </figcaption>
        </figure>
        
        <Form dataP={disiplayForm}  funcP={ToggleOverlay} typeP="profile"/>
    </div>
  )
}
