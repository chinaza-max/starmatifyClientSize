import './multiPurposeCards.css'
import MultiPurposeCard from "../multiPurposeCard/multiPurposeCard"



export default function multiPurposeCards(props) {


  const content=props.dataP.map((data,index)=>{
      return(
          <MultiPurposeCard key={index} dataP={data} typeP={props.typeP}/>
      )
  })

  
  return (
    <div className='multiPurposeCards'>
      {content}
    </div>
  )
}
