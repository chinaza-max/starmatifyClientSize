import './multiPurposeCard.css'
import Button from '../../styledComponent/ButtonNoIcon.styled'


export default function multiPurposeCard(props) {
  return (
    <ul className='multiPurposeCard'> 
        <li className='first'>
        
          {props.typeP==="Pending"?
            <>
                <h3>{props.dataP.data3}</h3>
                <p className='service'>{props.dataP.data4}</p>
                <p>Created: {props.dataP.data1}</p>
                <p>Expire: {props.dataP.data2}</p>
            </>
           :
           
           <>
              {props.typeP==="active"?
                  <>
                   <h3>{props.dataP.data1}</h3>
                   <p className='service'>{props.dataP.data3}</p>
                   <p className='date'>{props.dataP.data2}</p>
                  </>
                :
                <>
                 <h3>{props.dataP.data4}</h3>
                 <p>{"ID: "+props.dataP.data2}</p>
                 <p className='date'>{props.dataP.data1}</p>
                </>
              }
             
           </>
          }
         
        </li>
        <li className='second'>

          {props.typeP==="Pending"?
            <>
                <ul className='button'> 
                  <li>
                      <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                        <h5>
                            view
                        </h5>
                      </Button>
                  </li>
                  <li>
                      <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                        <h5>
                            pay
                        </h5>
                      </Button>
                  </li>
              </ul>
              <ul className='payment'> 
                  <li>
                    Amount:   
                  </li>
                  <li>
                  {props.dataP.data5}    
                  </li>
              </ul>
            </>
          :
          <>
              {props.typeP==="active"? 
                  <>
                  <ul className='button'> 
                    <li>
                        <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                          <h5>
                              view
                          </h5>
                        </Button>
                    </li>
                    <li>
                        <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >  
                        {props.dataP.data4===props.dataP.data5?
                          <h5>
                            renew
                          </h5>
                          :
                          <h5>
                              pay
                          </h5>
                        }       
                          
                        </Button>
                    </li>
                </ul>
                <ul className='payment'> 

                    {props.dataP.data4===props.dataP.data5?
                      <>
                        <li>
                          Amount
                          </li>
                          <li>
                          {"NGN "+props.dataP.data4}    
                        </li> 
                      </>
                    :
                    <>
                      <li>
                        Amount
                        </li>
                        <li>
                        {"NGN " + props.dataP.data4}    
                      </li> 
                      <li>
                       Unpaid
                        </li>
                        <li>
                        {"NGN " + props.dataP.data5}    
                      </li> 
                     </>
                    }
                   
                </ul>
              </>
              :
              <>
                  <p className={props.dataP.data4==="project payment"?"changeColor p":"p pColor"}>{"NGN " +props.dataP.data3}</p>
                  <p className='p'>{props.dataP.data5}</p>
              </>
              }
               
          </>
          }
          
        </li>
  </ul>
  )
}
