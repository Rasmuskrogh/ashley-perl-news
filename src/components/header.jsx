import { Link } from "react-router-dom";
import React, { useState } from "react";
import Notice from "./Notice";
import Hamburger from "./Hamburger";

import "./header.css";

const Header = () => {
  const [buttonActivity, setButtonActivity] = useState(true);
  const [openBurger, setOpenBurger] = useState(false);

  const toggleBurger = () => {
    setOpenBurger(!openBurger);
  };

  const clickHandler = () => {
    setButtonActivity(false);
  };

  return (
    <>
      {!buttonActivity ? null : <Notice onClick={clickHandler} />}
      <header className={openBurger ? "main-header main-header-burger" : "main-header"}>
        <h1>
          <Link to="/" onClick={openBurger ? toggleBurger : ""}>
            ASHLEY PERL{" "}
          </Link>
        </h1>
        <nav className="header-nav">
          <ul className={!openBurger ? "header-list" : "header-list open"}>
            <li className="header-links">
              <Link to="/about" onClick={toggleBurger}>
                ABOUT
              </Link>
            </li>
            <li className="header-links">
              <Link to="/reporting" onClick={toggleBurger}>
                REPORTING
              </Link>
            </li>
            <li className="header-links">
              <Link to="/contact" onClick={toggleBurger}>
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="hamburger " onClick={toggleBurger}>
            <Hamburger isOpen={openBurger} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
