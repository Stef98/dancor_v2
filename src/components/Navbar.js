import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleclick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav class="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="./images/logo.jpg" alt="logo" className="logo" />
          </Link>

          <div className="menu-icon" onClick={handleclick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
