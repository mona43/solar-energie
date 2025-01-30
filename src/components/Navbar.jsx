import React, { useState } from "react";
import i18n from "i18next";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState();
  const [currentLanguage, setCurrentLanguage] = useState("de");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <nav className="navbar1">
    <img src="logonav.png" alt="Logo" className="logo" />
      <div>
          
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}>
              {i18n.t("navbar.home")}
            </Link>
          </li>
          <li>
            <Link
              to="/solar"
              className={activeLink === "/solar" ? "active" : ""}
              onClick={() => handleLinkClick("/solar")}>
              {i18n.t("navbar.solar")}
            </Link>
          </li>
          <li>
            <Link
              to="/energie"
              className={activeLink === "/energie" ? "active" : ""}
              onClick={() => handleLinkClick("/energie")}>
              {i18n.t("navbar.energy")}
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={activeLink === "/services" ? "active" : ""}
              onClick={() => handleLinkClick("/services")}>
              {i18n.t("navbar.services")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => handleLinkClick("/contact")}>
              {i18n.t("navbar.contact")}
            </Link>
          </li>
          <li className="language-switcher">
            <select
              value={currentLanguage}
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-dropdown">
              <option value="de">{i18n.t("navbar.de")}</option>
              <option value="fr">{i18n.t("navbar.fr")}</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
