import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left Side */}
        {/* <div className="flexColStart f-left">
          <img src="./brown-logo2.png" alt="" width={180} />
          <span className="secondaryText t">
            Our vision is to enrich lives and create the <br />
            ultimate living experience for everyone.
          </span>
        </div> */}
        {/* Right Side */}

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Islamabad,Pakistan</span>
          <div className="flexCenter f-menu">
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
