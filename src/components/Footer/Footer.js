import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import img from "../../images/starmatelogo.png";



export default function Footer() {
  return (
    <div className='Footer'>
        <ul>
            <li>
                <div className='image'>
                    <img src={img} alt="#"/>
                </div>
                <p>
                With our platform and everything we have put in place for your security and that of your valuables, you can be rest assured! Our platform allows you to meet, keep tabs and view the background information of the staff that have been assigned to your project. <br/>You can also assign supervisors to monitor your projects on the go.
                </p>
            </li>
            <li className='contactContainer'>
              <div>
                <h2>Contacts</h2>
                    <ul> 
                        <li>m</li>
                        <li>
                            <h5>PHONES</h5>
                            <p>020203939939</p>
                        </li>
                    </ul>
                    <ul> 
                        <li>m</li>
                        <li>
                            <h5>ADDRESS</h5>
                            <p>nO 2 DANso street</p>
                        </li>
                    </ul>
              </div>
            </li>
            <li className='Links'>
                <h2>Link</h2>
                <div> 
                    <Link to={"#"}> FAQs</Link>
                </div>
                <div> 
                    <Link to={"#"}> Terms of use</Link>
                </div>
                <div> 
                    <Link to={"#"}> Privacy Policy</Link>
                </div>
            </li>
        </ul>
        <div>
            <span> contact developer-081888889</span>
        </div>
    </div>
  )
}
