import { Link } from "react-router-dom";
import React, { useState } from "react";
import Notice from "./Notice";

import "./Header.css";

const Header = () => {
  const [buttonActivity, setButtonActivity] = useState(true);

  const clickHandler = () => {
    setButtonActivity(false);
  };
  return (
    <>
      {!buttonActivity ? null : <Notice onClick={clickHandler} />}
      <header className="main-header">
        <h1>
          <Link to="/">ASHLEY PERL</Link>
        </h1>
        <nav className="header-nav">
          <ul className="header-list">
            <li className="header-links">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="header-links">
              <Link to="/writing">WRITING</Link>
            </li>
            <li className="header-links">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
