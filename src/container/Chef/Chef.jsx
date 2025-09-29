import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className=" app__bg app__wrapper section__padding">
    <div className=" app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className=" app__wrapper_info">
      <SubHeading title="Chef’s Word" />
      <h1 className=" headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Food is not just sustenance, it's a celebration of culture and tradition.
          </p>
        </div>
        <p className="p__opensans">
          We believe in honoring the rich culinary heritage of Egypt while embracing modern techniques. Each dish we create tells a story of our land, our people, and our passion for exceptional flavors. Using time-honored recipes passed down through generations, combined with the freshest local ingredients, we strive to create dining experiences that nourish both body and soul.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className=" p__opensans ">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;

// app__chef-content
// app__chef-content_quote
// app__chef-content_quote img
// app__chef-sign
// app__chef-sign
// app__chef-sign img
