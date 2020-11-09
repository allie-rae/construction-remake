import React from "react";
import "./jumbotron.css";
import logo from '../images/white_logo.png';

const Jumbotron = () => {
  return (
    <div className="jumbo-container">
      <div className="jumbo">
        <div className="center-text">
          <img className="logo" src={logo} />
        </div>
        <div className="header2">
          Tacoma, Puyallup, Seattle, and surrounding areas
        </div>
        <button>
          <a href="mailto:jon@jonthebuilderllc.com">Get a free quote</a>
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
