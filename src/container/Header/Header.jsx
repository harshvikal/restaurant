import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="h11">Chase the new flavour</h1>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <h1 className="p__opensans" style={{ margin: "2rem 0" , color:"white"}}>
      If you talk about food just as much as you eat it, you're in good company. We've got a famous chef.
      </h1>
      <button type="button" className="custom__button">
       <h3>Explore Menu</h3> 
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
