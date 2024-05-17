import React from "react";
import "./header.css";

const header = () => {
  return (
    <header className="main-header">
      <h1>ASHLEY PERL</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li>ABOUT</li>
          <li>WRITING</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
