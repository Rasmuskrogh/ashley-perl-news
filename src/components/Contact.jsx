import { Link } from "react-router-dom";
import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="contact-header">CONTACT</h1>
        <p className="contact-paragraph">
          Get in touch to talk about writing, fact-checking, journalism or other
          collaborations.
        </p>
        <p className="contact-information">You can reach me via:</p>
        <p className="contact-information">
          <Link to="mailto:ashleyaperl@gmail.com">ashleyaperl@gmail.com</Link>
        </p>
        <p className="contact-information">
          <Link to="https://www.linkedin.com/in/ashleyperl/">LinkedIn</Link>
        </p>
        <p className="contact-information">
          <Link to="https://x.com/ashleyaperl">Twitter/X</Link>
        </p>
      </div>
    </>
  );
};

export default Contact;
