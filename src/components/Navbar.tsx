import React, { useState } from "react";
import Button from "./Controls/Button";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar__txt">
        <h3>MedicalRecov</h3>
        <div className="navbar-titles">
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="navbar-btns">
        <Button
          variant="primary"
          type="text"
          onClick={() => console.log("clicked")}
          className="mr-8"
        >
          Login
        </Button>
        <Button
          variant="primary"
          type="filled"
          onClick={() => console.log("clicked")}
        >
          Join Us
        </Button>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-menu${menuOpen ? " open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#product">Product</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
