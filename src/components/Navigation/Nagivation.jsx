import React from "react";
import Button from "../Button/Button";

import "../../statics/styles/Navigation.css";

import logo from "../../statics/images/logo.svg";

const Nagivation = () => {
  return (
    <nav>
      <div className="nav__logo logo">
        <img src={logo} alt="Company's logo" />
      </div>

      <div className="nav__menu">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Blog</a>
        <a href="/">Careers</a>
      </div>

      <Button />
    </nav>
  );
};

export default Nagivation;
