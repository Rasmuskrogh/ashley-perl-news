import React from "react";
import Headshot from "../assets/PerlAshley.jpg";

import "./Main.css";

const Main = () => {
  return (
    <div className="section-wrapper">
      <section className="presentation-section">
        <h1>Hello.</h1>
        <p>
          I’m Ashley Perl – a journalist <br /> covering energy, climate and
          <br />
          science stories.
        </p>
      </section>
      <section className="image-section">
        <img src={Headshot} alt="headshot"></img>
      </section>
    </div>
  );
};

export default Main;
