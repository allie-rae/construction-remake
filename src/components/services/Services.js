import React from "react";
import "./services.css";

const Services = (props) => {

  const handleScroll = (event, refr) => {
    event.preventDefault();
    window.scrollTo({
      top: refr.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <main ref={props.servicesRef}>
      <div id="services" className="about-outer" alt="services">
        <div className="image-background kitchen large-inner">
          <div>
            Kitchens & Baths
            <hr />
          </div>
        </div>
        <div className="large-inner">
          <div>
            <p>
             <ul>
               <li>Backsplashes</li>
               <li>Countertops</li>
               <li>Cabinet/shower/tub installation</li>
               <li>Flooring</li>
               <li>Tilework</li>
             </ul>
            </p>
            <a href="#gallery" onClick={e => handleScroll(e, props.galleryRef.current)}>Gallery ></a>
          </div>
        </div>
      </div>
      <div className="about-outer reverse">
        <div className="large-inner">
          <div>
            <p>
              <ul>
                <li>New Additions</li>
                <li>Floorplan Design</li>
                <li>Staircases/handrails</li>
                <li>Drywall</li>
                <li>Paint</li>
              </ul>
            </p>
            <a href="#gallery" onClick={e => handleScroll(e, props.galleryRef.current)}>Gallery ></a>
          </div>
        </div>
        <div className="image-background ceiling large-inner">
          <div>
            Interior Rennovation
            <hr />
          </div>
        </div>
      </div>
      <div className="about-outer">
        <div className="image-background furniture large-inner">
          <div>
            Finish Carpentry
            <hr />
          </div>
        </div>
        <div className="large-inner">
          <div>
            <p>
              <ul>
                <li>Trim</li>
                <li>Baseboards</li>
                <li>Crown Molding</li>
              </ul>
            </p>
            <a href="#gallery" onClick={e => handleScroll(e, props.galleryRef.current)}>Gallery ></a>
          </div>
        </div>
      </div>
      <div className="about-outer reverse">
        <div className="large-inner">
          <div>
            <p>
              <ul>
                <li>Decks/Stairs/Handrails</li>
                <li>Fences</li>
                <li>Cement Work</li>
                <li>Wood/Vinyl/Fiberboard Siding</li>
                <li>Paint</li>
              </ul>
            </p>
            <a href="#gallery" onClick={e => handleScroll(e, props.galleryRef.current)}>Gallery ></a>
          </div>
        </div>
        <div className="image-background fence large-inner">
          <div>
            Exterior Carpentry
            <hr />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
