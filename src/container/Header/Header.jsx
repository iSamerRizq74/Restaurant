import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the special flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem'}}>
        Experience the perfect blend of traditional recipes and modern culinary innovation. 
        Our chefs craft each dish with passion and the finest ingredients, creating 
        unforgettable dining moments that will keep you coming back for more.
      </p>
      <button 
        type="button" 
        className="custom__button"
        onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
      >
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
