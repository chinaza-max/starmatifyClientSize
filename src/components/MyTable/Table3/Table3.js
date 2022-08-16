import "./Table3.css"
import Button from '../../styledComponent/ButtonNoIcon.styled';

export default function Table3(props) {
  return (
    <ul className="Table3">
        <li>{props.dataP.data1}</li>
        <li>{props.dataP.data2}</li>
        <li>{props.dataP.data3}</li>
        <li>{props.dataP.data4}</li>
        <li>{props.dataP.data5}</li>
        <li className="button">
            <Button  borderColorP="green" buttonColorP="green" ColorP="white">
                <h5>view</h5>
            </Button>
        </li>
        <li className="button">
            <Button borderColorP="green" buttonColorP="green" ColorP="white">
                <h5>pay</h5>
            </Button>
        </li> 
    </ul>
  )
}
