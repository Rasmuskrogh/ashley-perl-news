import { Link } from "react-router-dom";
import React from "react";
import XLogo from "../assets/XLogo.jpg";
import linkedIn from "../assets/linkedin.svg";
import muckrack from "../assets/mr_logo_vertical-1024x638.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p> &copy; Ashley Perl 2025</p>
      <div className="footer-links">
        <Link to="https://www.linkedin.com/in/ashleyperl/" target="_blank">
          <img src={linkedIn} alt="linkedIn logo"></img>
        </Link>
        <Link className="x-logo" to="https://x.com/ashleyaperl" target="_blank">
          <img src={XLogo} alt="X logo"></img>
        </Link>
        <Link
          className="muckrack-logo"
          to="https://muckrack.com/ashley-perl"
          target="_blank"
        >
          <img src={muckrack} alt="muckrack logo"></img>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
