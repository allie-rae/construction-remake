import React from "react";
import "./navbar.css";

const Navbar = () => {
  const menu = (event) => {
    event.preventDefault();
    document.querySelector(".menu").classList.toggle("none");
    document.querySelector(".fa-bars").classList.toggle("none");
    document.querySelector(".fa-times").classList.toggle("none");
  };

  return (
    <nav>
      <div className="logo">Jon's Carpentry</div>
      <div className="links">
        <a href="example.com">Home</a>
        <a href="example.com">Services</a>
        <a href="example.com">Gallery</a>
        <a href="example.com">Contact</a>
      </div>
      <div className="menu none fade-in">
        <a href="example.com" onClick={menu}>
          Home
        </a>
        <a href="example.com" onClick={menu}>
          Services
        </a>
        <a href="example.com" onClick={menu}>
          Gallery
        </a>
        <a href="example.com" onClick={menu}>
          Contact
        </a>
      </div>
      <div className="hamburger" onClick={menu}>
        <i className="fas fa-bars"></i>
        <i className="fas fa-times none"></i>
      </div>
    </nav>
  );
};

export default Navbar;
