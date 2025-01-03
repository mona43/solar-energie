import React from "react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); 

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
              className={activeLink === "#home" ? "active" : ""}
              onClick={() => handleLinkClick("#home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={activeLink === "#about" ? "active" : ""}
              onClick={() => handleLinkClick("#about")}
            >
              About
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
              href="#contact"
              className={activeLink === "#contact" ? "active" : ""}
              onClick={() => handleLinkClick("#contact")}
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
