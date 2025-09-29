import React from "react";

import "./Footer.css";
import { Newsletter, FooterOverlay } from "../../components";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { images } from "../../constants";
const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className=" app__footer-links">

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Nile Corniche, Zamalek, Cairo, Egypt</p>
        <p className="p__opensans">+20 1065290660</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className=" p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className=" spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Opening Hours</h1>
        <p className="p__opensans">Saturday - Wednesday:</p>
        <p className="p__opensans">10:00 am - 01:00 am</p>
        <p className="p__opensans">Thursday - Friday:</p>
        <p className="p__opensans">10:00 am - 02:00 am</p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2025 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;

// app__footer;
// app__footer - links;
// app__footer - links_contact;
// app__footer - links_logo;
// app__footer - links_work;
// app__footer-links_icons
// app__footer-headtext
