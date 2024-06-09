import { Link } from "react-router-dom";
import React from "react";
import XLogo from "../assets/XLogo.jpg";
import linkedIn from "../assets/linkedin.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p> &copy; Ashley Perl 2024</p>
      <div className="footer-links">
        <Link to="https://www.linkedin.com/in/ashleyperl/">
          <img src={linkedIn}></img>
        </Link>
        <Link className="x-logo" to="https://x.com/ashleyaperl">
          <img src={XLogo}></img>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;