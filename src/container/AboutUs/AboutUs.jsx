import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center ">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Founded in 2010, our restaurant has been serving authentic Egyptian and Mediterranean cuisine with a modern twist. Our passion for quality ingredients and traditional cooking methods has made us a very beloved dining destination in Cairo. We source our ingredients locally whenever possible and work closely with farmers and producers to ensure the highest quality in every dish we serve.
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Our journey began in a small kitchen in downtown Cairo, where our founder, started serving his family recipes to locals. Over the years, we've grown into one of the city's most celebrated restaurants, earning multiple awards and recognition for our innovative approach to traditional Egyptian cuisine. Our commitment to excellence and hospitality remains as strong today as it was on our first day of service.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;

