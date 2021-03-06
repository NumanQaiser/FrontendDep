import React from 'react'
import {BrowserRouter as Link, NavLink} from "react-router-dom";
function Navbar() {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                   <NavLink className="navbar-brand text-white" to="/home">Numan Naqvi</NavLink> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white" />
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                    <NavLink className="nav-link text-white" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar
