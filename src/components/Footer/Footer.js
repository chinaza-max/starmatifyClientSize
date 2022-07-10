import "./Footer.css";
import {NavLink} from "react-router-dom";
import FlexRow from "../../components/styledComponent/Flexrow.styled"
import FlexColumn  from "../../components/styledComponent/Flexcolumn.styled"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';


export default function Footer() {

  
  return (
      <footer className="HomeBottomNavContainer">
        <FlexRow className="HomeBottomNav">
          <li>
            <NavLink  to='/' className="HomeBottomNavAncho"  activeclassname="active">
              <FlexColumn>
                <li><HomeIcon/></li>
                <li><span>Home</span></li>
              </FlexColumn>
            </NavLink>
          </li>
          <li>
            <NavLink  to='/Sport'  className="HomeBottomNavAncho">
              <FlexColumn>
                <li><PostAddIcon/></li>
                <li><span>Betslip</span></li>
              </FlexColumn>
            </NavLink>
          </li>
          <li>
            <NavLink  to='/Blog'  className="HomeBottomNavAncho" >
              <FlexColumn>
                <li><ReceiptLongIcon/></li>
                <li><span>My Bet</span></li>
              </FlexColumn>
            </NavLink>
          </li>
          <li>
            <NavLink  to='/ProfileMobile'  className="HomeBottomNavAncho" >
              <FlexColumn>
                <li><PersonIcon/></li>
                <li><span>Profile</span></li>
              </FlexColumn>
            </NavLink>
          </li>
        </FlexRow>
      </footer>

  )
}


