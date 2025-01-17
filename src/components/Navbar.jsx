import React, { useState } from "react";
import i18n from "i18next";

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
    <nav className="navbar">
      <div className="container">
        <img src="logonav.png" alt="Logo" className="logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a
              href="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}>
              {i18n.t("navbar.home")}
            </a>
          </li>
          <li>
            <a
              href="/solar"
              className={activeLink === "/solar" ? "active" : ""}
              onClick={() => handleLinkClick("/solar")}>
              {i18n.t("navbar.solar")}
            </a>
          </li>
          <li>
            <a
              href="/energie"
              className={activeLink === "/energie" ? "active" : ""}
              onClick={() => handleLinkClick("/energie")}>
              {i18n.t("navbar.energy")}
            </a>
          </li>
          <li>
            <a
              href="/services"
              className={activeLink === "/services" ? "active" : ""}
              onClick={() => handleLinkClick("/services")}>
              {i18n.t("navbar.services")}
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => handleLinkClick("/contact")}>
              {i18n.t("navbar.contact")}
            </a>
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
