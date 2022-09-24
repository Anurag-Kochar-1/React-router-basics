import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import Error from "./Pages/Error"

import Navbar from './Components/Navbar';
import Features from "./Pages/Features"
import Pricing from "./Pages/Pricing"

function App() {
  return (
    <Router>

      <Navbar />

      {/* <nav>
        <Link to="/" > Home  </Link>
        <Link to="/about" > About  </Link>
        <Link to="/profile" > Profile  </Link>
      </nav> */}


      
      {/* <nav>
        <Link to="/" > Home Page </Link>
        <Link to="/features" >  Features Page </Link>
        <Link to="/pricing" > Profile Page </Link>
      </nav> */}


      {/* <Routes> 
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/profile/:username' element={<Profile /> } />
        <Route path='*' element={<Error /> } />
      </Routes> */}

    </Router>
  );
}



export default App;
