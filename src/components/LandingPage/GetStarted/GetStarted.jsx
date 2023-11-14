import React from "react";
import "./GetStarted.css";
import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with HomeAid</span>
          <button className="button">
            <a href="/SignUP">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
