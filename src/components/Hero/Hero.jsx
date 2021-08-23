import React from "react";
import Button from "../Button/Button.jsx";

import "../../statics/styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image"></div>
      <div className="hero__cta">
        <h1>Next Generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="hero__cta-btn">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Hero;
