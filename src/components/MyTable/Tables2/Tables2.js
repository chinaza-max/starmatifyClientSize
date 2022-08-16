import React from 'react';
import "./Tables2.css";
import Table2 from "../Table2/Table2"

export default function Tables2(props) {

    const content=props.dataP.map((data,index)=>{
        return(
            <Table2 key={index} dataP={data}/>
        )
    })


  return (
    <div className="Tables2">
    <ul className="head">
      <li><h4>Date</h4></li>
      <li><h4>Transaction ID</h4></li>
      <li><h4>Amount</h4></li>
      <li><h4>Description</h4></li>
      <li><h4>Status</h4></li>
    </ul>
    {content}
</div>
  )
}
