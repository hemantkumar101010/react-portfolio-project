import React from 'react';
import logo from "../3coder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div  className="container">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="3coder logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          < FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" className="nav-link" offset={-110} href="#">About Me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" className="nav-link" offset={-110} href="#">services</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" className="nav-link" offset={-110} href="#">experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" className="nav-link" offset={-110} href="#">portfolio </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" className="nav-link" offset={-110} href="#">contacts</Link>
            </li>
          </ul>

        </div>
      </div>

    </nav>
  )
}
export default Navbar
