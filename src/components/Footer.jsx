import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-contact">
          <div className="contact-item">
            <img src="location.svg" alt="Location Icon" className="footer-icon" />
            <Link to="/contact">{t("footer.location")}</Link>
          </div>
          <div className="contact-item">
            <img src="phone.svg" alt="Phone Icon" className="footer-icon" />
            <Link to="tel:+41032508323">{t("footer.phone")}</Link>
          </div>
          <div className="contact-item">
            <img src="email.svg" alt="Email Icon" className="footer-icon" />
            <Link to="mailto:info@mfmelektro.ch">{t("footer.email")}</Link>
          </div>
        </div>

        <ul className="footer-links">
          <li>
            <Link to="/">{t("footer.privacy")}</Link>
          </li>
          <li>
            <Link to="/">{t("footer.terms")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("footer.contactUs")}</Link>
          </li>
        </ul>

        <div className="footer-social">
          <p>{t("footer.followUs")}:</p>
          <Link to="https://www.facebook.com/share/1FAagzRDsV/" target="_blank" rel="noopener noreferrer">
            <img src="facebook.svg" alt="Facebook Icon" className="social-icon" />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <img src="twitter.svg" alt="Twitter Icon" className="social-icon" />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <img src="instagram.svg" alt="Instagram Icon" className="social-icon" />
          </Link>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Solar Energie. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
