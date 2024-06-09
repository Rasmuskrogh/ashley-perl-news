import React from "react";
import "./Notice.css";

const Notice = ({ onClick }) => {
  return (
    <div className="notice-wrapper">
      <div>
        <p></p> {/* A bad solution to a z-index problem but works for now */}
      </div>
      <div className="paragraph-wrapper">
        <p>Page under development</p>
      </div>
      <div className="button-wrapper">
        <button onClick={onClick}>X</button>
      </div>
    </div>
  );
};

export default Notice;
