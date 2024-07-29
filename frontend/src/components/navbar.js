import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
import logo from '../assets/Shigoto.png'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Naukri Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#jobs">Jobs</a></li>
        <li><a href="#companies">Companies</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/Login_signup">
            <button className="navbar-register" >Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
