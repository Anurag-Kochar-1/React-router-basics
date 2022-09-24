import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "../Pages/Home";
import Features from "../Pages/Features";
import Pricing from "../Pages/Pricing"
import Error from "../Pages/Error";


function Navbar() {
  return (
    <div>
        
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <Link to="/home" className="nav-link fw-semibold"> Website  </Link>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        
                        <Link to="/home" className="nav-link"> Home  </Link>

                    </li>
                    <li className="nav-item">

                        <Link to="/features" className="nav-link"> Features  </Link>

                    </li>
                    <li className="nav-item">
                        
                        <Link to="/pricing" className="nav-link"> Pricing  </Link>

                    </li>
                    
                    </ul>
                </div>
                </div>
            </nav>
        

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />}/>
        <Route path='/pricing' element={<Pricing /> } />
        <Route path='*' element={<Error /> } />

    </Routes>

    </div>
  );
}

export default Navbar;
