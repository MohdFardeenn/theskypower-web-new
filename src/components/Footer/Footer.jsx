import "./Footer.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-col">

          <h2 className="footer-logo">
            SKYPower
          </h2>

          <p>
            SKYPower provide one of the best reliable power solutions across India 
          </p>

          <div className="contact-box">

            <h4>FOR SALES ENQUIRY</h4>

            <p>
              <FaPhoneAlt /> +91 7351211915 (IND), +971 58 262 6639 (UAE)
            </p>

            <p>
              <FaEnvelope /> info@skypower.com
            </p>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-col">

          <h3>QUICK LINKS</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Export</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* Products */}

        <div className="footer-col">

          <h3>PRODUCTS</h3>

          <ul>
            <li>Automotive Batteries</li>
            <li>Inverter Batteries</li>
            <li>Solar Batteries</li>
            <li>E-Rickshaw Batteries</li>
            <li>Lithium Batteries</li>
          </ul>

        </div>

      </div>

      <div className="copyright">
        © 2025 SKYPower Batteries. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;