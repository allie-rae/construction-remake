import React from "react";
import "./jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="jumbo-container">
      <div className="jumbo">
        <div className="center-text">
          <h1>Jon's Carpentry</h1>
        </div>
        <div className="header2">
          Build your dream home with the help of a trustworthy, local business.
          I love to build what my clients need exactly the way they need it.
        </div>
        <button>
          <a href="mailto:jonrobinson90@live.com">Get a free quote</a>
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
