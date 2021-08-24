import React from "react";
import Button from "../Button/Button";

import logo from "../../statics/images/logo.svg";
import facebook from "../../statics/images/icon-facebook.svg";
import youtube from "../../statics/images/icon-youtube.svg";
import twitter from "../../statics/images/icon-twitter.svg";
import pinterest from "../../statics/images/icon-pinterest.svg";
import instagram from "../../statics/images/icon-instagram.svg";

import "../../statics/styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo-social">
        <img src={logo} alt="Logo" />
        <div className="social">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="Youtube" />
          </a>
          <a href="https://www.twitter.com/">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.pinterest.com/">
            <img src={pinterest} alt="Pinterest" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer__links">
        <div>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </div>
        <div>
          <a href="#careers">Careers</a>
          <a href="#support">Support</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer__cta">
        <Button />
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
