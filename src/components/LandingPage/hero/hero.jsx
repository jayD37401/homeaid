import React from "react";
import "./hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Searchbar from "../Searchbar/Searchbar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*Left Side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Start Hiring <br />
              The Most Skillfull <br />
              Professionals
            </motion.h1>
          </div>
          <div className="flexColStart hero-description">
            <span className="secondaryText">
              From dirty to flirty, we'll make your home shine!
            </span>
            <span className="secondaryText">
              Unleash the magic of your home with our services.
            </span>
          </div>

          <Searchbar />

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>

              <span>Premiuim Products</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>

              <span>Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>

              <span>Award Winnings</span>
            </div>
          </div>
        </div>

        {/*Right Side*/}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./heroo.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
