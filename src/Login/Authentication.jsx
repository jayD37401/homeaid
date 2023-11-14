import React, { useState } from "react";
import "./Authentication.css";
import { motion } from "framer-motion";
import { app } from ".././firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const auth = getAuth(app);

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sign_in = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      const uid = user.uid;
      console.log("Uid: ", uid);
      toast.success(`Congratulations! Your UID: ${uid}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      const errorMessage = error.message || "Error: ";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     console.log("User UID:", uid);
  //   } else {
  //   }
  // });

  return (
    <div className="Authentication">
      <div className="paddings Header">HomeAid.</div>
      <div className="paddings flexColStart Whole_Page">
        {/* <div className="left--side">
          <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="Image_Container"
          >
            <img src="./11.jpeg" alt="" />
          </motion.div>
        </div> */}

        <motion.form
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="infoForm_auth authenticationForm"
        >
          <h3 className="h3">Log In</h3>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="infoInput_auth"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="off"
              required
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput_auth"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              autoComplete="off"
            />
          </div>

          <div>
            <span className="clickable" style={{ fontSize: "12px" }}>
              Don't have an account?{" "}
              <a className="AuthText" href="/SignUp">
                Sign Up
              </a>
            </span>
            <button onClick={sign_in} className="button1_auth infoButton_auth">
              Login
            </button>
          </div>
        </motion.form>
      </div>
      <div class="footer">2023 HomeAid. All rights reserved.</div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Authentication;
