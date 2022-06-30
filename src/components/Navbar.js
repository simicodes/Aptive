import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="App logo" />
          </Link>
        </div>
        <ul className={toggleMenu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-items">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/" className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hamburgerMenu" onClick={handleToggleMenu}>
          {toggleMenu ? (
            <FaTimes fontSize={27} color="#fff" />
          ) : (
            <FaBars fontSize={27} color="#fff" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
