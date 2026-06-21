import "./Navbar.css";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          SKY<span>Power</span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>

          <li className="dropdown">
            <a href="/">
              Products <FaChevronDown />
            </a>
          </li>

          <li className="dropdown">
            <a href="/">
              Export <FaChevronDown />
            </a>
          </li>

          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Infrastructure</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>


        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
