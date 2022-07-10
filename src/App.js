import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './themeContext';
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Dashboard from "./pages/Dashboard/Dashboard";
import Affiliate from "./pages/Affiliate/Affiliate";


function App() {
  return (
   <ThemeProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Gallery" element={<Gallery/>} />
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/Affiliate" element={<Affiliate/>} />
        </Routes>
      </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;