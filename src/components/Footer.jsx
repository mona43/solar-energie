function Footer() {
    return (
      <footer>
        <div className="footer-container">
          <ul >
            <li >
              <a href="/privacy" >
                Privacy Policy
              </a>
            </li>
            <li >
              <a href="/terms">
                Terms of Service
              </a>
            </li>
            <li >
              <a href="/contact" >
                Contact Us
              </a>
            </li>
          </ul>
          <p>&copy; {new Date().getFullYear()} Solar Energie. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  