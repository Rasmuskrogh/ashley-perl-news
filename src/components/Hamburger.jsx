import React from "react";

import "./Hamburger.css";

const Hamburger = ({ isOpen }) => {
  return (
    <div className="hamburger">
      <div className={!isOpen ? "burger" : "burger burger1"} />
      <div className={!isOpen ? "burger" : "burger burger2"} />
      <div className={!isOpen ? "burger" : "burger burger3"} />
    </div>
  );
};

export default Hamburger;
