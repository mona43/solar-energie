import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // العنصر النشط

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // تغيير العنصر النشط
    setIsOpen(false); // إغلاق القائمة عند النقر (للشاشات الصغيرة)
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">MyApp</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              className={activeLink === "#home" ? "active" : ""}
              onClick={() => handleLinkClick("#home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
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
