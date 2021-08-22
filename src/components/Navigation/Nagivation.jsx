import React, { useState } from "react";
import Button from "../Button/Button";

import "../../statics/styles/Navigation.css";

import logo from "../../statics/images/logo.svg";
import iconHamburger from "../../statics/images/icon-hamburger.svg";
import iconClose from "../../statics/images/icon-close.svg";

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
          <img
            className="nav__toggle-icon"
            src={isActive ? iconClose : iconHamburger}
          />
        </div>
      </div>

      <nav
        className={`nav__toggleable ${isActive ? "nav__toggleable--show" : ""}`}
      >
        <div className="nav__menu">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
        </div>

        <div className="nav-btn">
          <Button />
        </div>
      </nav>
    </div>
  );
};

export default Nagivation;
