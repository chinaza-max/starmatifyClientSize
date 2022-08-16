import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './themeContext';
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Dashboard from "./pages/Dashboard/Dashboard";
import Affiliate from "./pages/Affiliate/Affiliate";
import Container1 from "./layout/Container1/Container1";
import Project from "./components/Project/Project";
import Transaction from "./components/Transaction/Transaction";
import Notification from "./components/Notification/Notification";
import Settings from "./components/Settings/Settings";



const NavlinksLogin=[{x:0,data:"Home",data2:"SelectedLink2  active2",data3:0,delay:100,data4:"#homeContainer",data5:"inpage"},
{x:0,data:"Gallery",data2:"SelectedLink2",data3:1,delay:200,data4:"/gallary",data5:""},
{x:0,data:"Dashboard",data2:"SelectedLink2",data3:2,delay:300,data4:"/Dashboard",data5:""},
{x:0,data:"Contact",data2:"SelectedLink2",data3:3,delay:400,data4:"#section7",data5:"inpage"}]


const NavlinksNotLogin=[{x:0,data:"Home",data2:"SelectedLink2  active2",data3:0,delay:100,data4:"#homeContainer",data5:"inpage"},
{x:0,data:"Service",data2:"SelectedLink2",data3:1,delay:200,data4:"#section4",data5:"inpage"},
{x:0,data:"Gallery",data2:"SelectedLink2",data3:2,delay:300,data4:"/gallary",data5:""},
{x:0,data:"Contact",data2:"SelectedLink2",data3:3,delay:400,data4:"#section7",data5:"inpage"}]

function App() {
  return (
   <ThemeProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
              <Route path="/Home" element={<Container1/>}>
                <Route path="/Home/Dashboard" element={<Dashboard/>}/>
                <Route path="/Home/Project" element={<Project/>} />
                <Route path="/Home/Transaction" element={<Transaction/>} />
                <Route path="/Home/Notification" element={<Notification/>} />
                <Route path="/Home/Settings" element={<Settings/>} />
              </Route>
            <Route path="/Affiliate" element={<Affiliate/>} />
            <Route path="/Dashboard/Gallery" element={<Gallery/>} />
        </Routes>
      </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;