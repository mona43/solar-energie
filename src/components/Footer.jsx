import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        
        <div className="footer-contact">
          <div className="contact-item">
            <img src="location.svg" alt="Location Icon" className="footer-icon" />
            <p>Lindenstrasse 21, 2552 Orpund</p>
          </div>
          <div className="contact-item">
            <img src="phone.svg" alt="Phone Icon" className="footer-icon" />
            <a href="tel:+41032508323">+41 032 508 323</a>
          </div>
          <div className="contact-item">
            <img src="email.svg" alt="Email Icon" className="footer-icon" />
            <a href="mailto:info@mfmelektro.ch">info@mfmelektro.ch</a>
          </div>
        </div>

        <ul className="footer-links">
          <li>
            <a href="/privacy">Datenschutzerklärung</a>
          </li>
          <li>
            <a href="/terms">Nutzungsbedingungen</a>
          </li>
          <li>
            <a href="/contact">Kontaktieren Sie uns</a>
          </li>
        </ul>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook.svg" alt="Facebook Icon" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="twitter.svg" alt="Twitter Icon" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram.svg" alt="Instagram Icon" className="social-icon" />
          </a>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Solar Energie. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
