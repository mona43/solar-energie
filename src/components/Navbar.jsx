import React from "react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/about"); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="container">
      <img
          src="logo.jpg"
          width={100}
          height={100}
          className="navbar-brand rounded-8 mx-2 logo"
          alt="Logo"
        />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a
              href="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}
            >
              Willkommen
            </a>
          </li>
          <li>
            <a
              href="/solar"
              className={activeLink === "/solar" ? "active" : ""}
              onClick={() => handleLinkClick("/solar")}
            >
              Solar
            </a>
          </li>
          <li>
            <a
              href="/energie"
              className={activeLink === "/energie" ? "active" : ""}
              onClick={() => handleLinkClick("/energie")}
            >
              Energie
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeLink === "#services" ? "active" : ""}
              onClick={() => handleLinkClick("#services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
