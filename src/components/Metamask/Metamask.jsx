import React from "react";
import { useEffect } from "react";
import "./Metamask.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase";
import { motion } from "framer-motion";
// import Web3 from "web3";
import { ethers } from 'ethers';

const db = getDatabase(app);

const Metamask = () => {
  useEffect(() => {
    if (window.ethereum) {
      console.log("Detected: ");
    } else {
      console.log("Not Detected: ");
    }
  }, []);
  return (
    <div className=" parentPage">
      <Header />
      <div className="Auth">
        <div className="a-left">
          <LeftSide />
          <RightSide />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

function Header() {
  return (
    <div className=" innerWidth ">
      <img src="./MetaMask8.png" alt="" width={200} />
    </div>
  );
}

function Footer() {
  return (
    <section className="f-wrapperr">
      <div className="paddings flexColEnd f-right">
        <div className="flexCenter f-menu">
          <span className="primaryText h1">FAQs</span>
        </div>
      </div>
    </section>
  );
}

function LeftSide() {
  // const connectToMetaMask = async () => {
  //   try {
  //     // Request access to MetaMask
  //     await window.ethereum.request({ method: "eth_requestAccounts" });
  //     // You are now connected to MetaMask
  //   } catch (error) {
  //     console.error("Error connecting to MetaMask:", error);
  //   }
  // };
  return (
    <div className="paddings innerWidth Webnamee">
      <motion.h1
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
      >
        A crypto wallet <br /> & gateway to <br /> blockchain apps
      </motion.h1>
      <motion.span
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        className="secondaryText h6"
      >
        Start exploring blockchain applications in <br /> seconds. Trusted by
        over 30 million users <br /> worldwide.
        <br />
      </motion.span>
      <button className="paddings button1_meta">Connect MetaMask</button>
    </div>
  );
}

function RightSide() {
  return (
    <motion.div
      initial={{ y: "2rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        type: "spring",
      }}
      className="flexColStart right"
    >
      <img
        src="https://images.ctfassets.net/9sy2a0egs6zh/7wNAiVbgssyrL7UY3xd4FY/2a15d3f50b85a34e8443c08c49579191/home-hero-dark.png?w=1920&q=80&fm=webp#only-dark"
        width={400}
      />
    </motion.div>
  );
}

export default Metamask;
