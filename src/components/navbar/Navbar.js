import React from "react";
import "./navbar.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Jumbotron from "../jumbotron/Jumbotron";
import Services from "../services/Services";

const Navbar = (props) => {
  const menu = (event) => {
    event.preventDefault();
    document.querySelector(".menu").classList.toggle("none");
    document.querySelector(".fa-bars").classList.toggle("none");
    document.querySelector(".fa-times").classList.toggle("none");
  };

  const handleScroll = (event, refr) => {
    event.preventDefault();
    window.scrollTo({
      top: refr.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }


  return (
    <BrowserRouter>
      <nav ref={props.homeRef}>
        <div className="logo">Jon's Carpentry</div>
        <div className="links">
          <Link to="/home" onClick={e => handleScroll(e, props.homeRef.current)}>Home</Link>
          <Link to="/about" onClick={e => handleScroll(e, props.aboutRef.current)}>About</Link>
          <Link to="/services" onClick={e => handleScroll(e, props.servicesRef.current)}>Services</Link>
          <Link to="/gallery" onClick={e => handleScroll(e, props.galleryRef.current)}>Gallery</Link>
          <Link to="/contact" onClick={e => handleScroll(e, props.contactRef.current)}>Contact</Link>
        </div>
        <div className="menu none fade-in">
          <Link to="/home" onClick={e => {handleScroll(e, props.homeRef.current); menu(e)}}>
            Home
          </Link>
          <Link to="/about" onClick={e => {handleScroll(e, props.aboutRef.current); menu(e)}}>
            About
          </Link>
          <Link to="/services" onClick={e => {handleScroll(e, props.servicesRef.current); menu(e)}}>
            Services
          </Link>
          <Link to="/gallery" onClick={e => {handleScroll(e, props.galleryRef.current); menu(e)}}>
            Gallery
          </Link>
          <Link to="/contact" onClick={e => {handleScroll(e, props.contactRef.current); menu(e)}}>
            Contact
          </Link>
        </div>
        <Switch>
          <Route exact path="/home" component={Jumbotron} />
          <Route exact path="/about" component={Services} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/gallery" component={Services} />
          <Route exact path="/contact" component={Services} />
        </Switch>
        <div className="hamburger" onClick={menu}>
          <i className="fas fa-bars"></i>
          <i className="fas fa-times none"></i>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
