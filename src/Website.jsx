import React from "react";
import Companies from "./components/LandingPage/Companies/Companies.jsx";
import Contact from "./components/LandingPage/Contact/Contact.jsx";
import Footer from "./components/LandingPage/Footer/Footer.jsx";
import GetStarted from "./components/LandingPage/GetStarted/GetStarted.jsx";
import Header from "./components/LandingPage/Header/Header.jsx";
import Residencies from "./components/LandingPage/Residencies/Residencies.jsx";
import Value from "./components/LandingPage/Value/Value.jsx";
import Hero from "./components/LandingPage/hero/hero.jsx";
import "./Website.css";

const Website = () => {
  return (
    <div className="App">
      <div>
        <Header/>
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer/>
    </div>
  );
};

export default Website;
