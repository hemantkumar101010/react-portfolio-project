import React from 'react';
import logo from "../3coder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">
        <a class="navbar-brand" href="#"><img className="logo" src ={logo} alt="3coder logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        < FontAwesomeIcon icon={faBars} style={{color : "#fff"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">how works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">portfolio </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contacts</a>
            </li>
          </ul>
        
        </div>
</div>

      </nav>
    )
}
export default Navbar