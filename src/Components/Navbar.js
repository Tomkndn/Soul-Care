import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const linkstyle={
  textDecoration: "none",
  fontSize:"1.5vw",
  marginTop:"-3vh"

};


function Navbar() {
  const [nav, setNav] = useState(false);
  

  const openNav = () => {
    setNav(!nav);
  };

  
  

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Harmony
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/tests" className="navbar-links">
            Tests
          </Link>
        </li>
        <li>
          <Link to="/doctor" className="navbar-links">
            Doctors
          </Link>
        </li>
        <li>
          <Link to="/appointment" className="navbar-links">
            Appointment
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-links">
            About
          </Link>
        </li>
      </ul>
      <Link to="/login" style={linkstyle}>
        <div className="Login_btn d-flex align-items-center justify-content-center mt-2" style={{fontSize: "1rem"}}>
        <i class="fa-solid fa-user me-2"></i>
          Login
        </div>
      </Link>

      {/* Mobile */}
      <div className={`mobile-navbar taskbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links ">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/tests">
              Tests
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/doctor">
              Doctors
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/appointment">
              Appointment
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
