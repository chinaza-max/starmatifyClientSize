import "./Tables3.css"
import Table from "../Table3/Table3"



export default function Tables3(props) {

  const content=props.dataP.map((data,index)=>{
                            return(
                              <Table key={index} dataP={data}/>
                            )
  })

  return (
    <div className="Tables3">
        <ul className="head">
          <li><h4>Created</h4></li>
          <li><h4>Expires</h4></li>
          <li><h4>Title</h4></li>
          <li><h4>Service</h4></li>
          <li><h4>Amount</h4></li>
          <li><h4>Action</h4></li>
        </ul>
        {content}
    </div>
  )
}
