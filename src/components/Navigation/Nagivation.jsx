import React, { useState } from "react";
import Button from "../Button/Button";

import "../../statics/styles/Navigation.css";

import logo from "../../statics/images/logo.svg";

const Nagivation = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav__logo logo">
          <img src={logo} alt="Company's logo" />
        </div>

        <div className="nav__toggle" onClick={toggleNav}>
          <i className="fas fa-bars"></i>
        </div>
      </div>

      <nav>
        <div
          className={`nav__menu nav__toggleable ${
            isActive ? "nav__toggleable--show" : ""
          }`}
        >
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
        </div>

        <div
          className={`nav-btn nav__toggleable ${
            isActive ? "nav__toggleable--show" : ""
          }`}
        >
          <Button />
        </div>
      </nav>
    </div>
  );
};

export default Nagivation;
