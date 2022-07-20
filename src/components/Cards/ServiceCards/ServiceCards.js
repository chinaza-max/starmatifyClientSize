import React from 'react'
import "./ServiceCards.css"
import Card from "../../Cards/ServiceCard/ServiceCard"

export default function ServiceCards(props) {


 const content=props.serviceDescrptionP.map((data,index)=>{
    
                                            return(
                                                <li key={index}>
                                                    <Card  serviceDescrptionP={data}/>
                                                </li>
                                            )
 })
  return (
    <ul className='ServiceCards'>
        {content} 
    </ul>
  )
}
