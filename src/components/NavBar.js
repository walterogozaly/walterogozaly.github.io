import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="nav">
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/contactme" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
