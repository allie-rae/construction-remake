import React from "react";
import "./services.css";

const Services = () => {
  return (
    <main>
      <div id="services" className="about-outer">
        <div className="image-background fence large-inner">
          <div>
            Decks & Fences
            <hr />
          </div>
        </div>
        <div className="large-inner">
          <div>
            <p>
              I can work with you to design the perfect deck and fence to bring
              your yard to life. There's no time like the present to create a
              beautiful outdoor space for your home.
            </p>
            <a href="#gallery">Gallery ></a>
          </div>
        </div>
      </div>
      <div className="about-outer reverse">
        <div className="large-inner">
          <div>
            <p>
              Do you have a vision for your home? Let's make it happen. From
              doors to floors and trim to tile, we've got you covered.
            </p>
            <a href="#gallery">Gallery ></a>
          </div>
        </div>
        <div className="image-background ceiling large-inner">
          <div>
            Interior Remodels
            <hr />
          </div>
        </div>
      </div>
      <div className="about-outer">
        <div className="image-background furniture large-inner">
          <div>
            Custom Carpentry
            <hr />
          </div>
        </div>
        <div className="large-inner">
          <div>
            <p>
              Let's work together to design and materialize that perfect custom
              piece for your home.
            </p>
            <a href="#gallery">Gallery ></a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
