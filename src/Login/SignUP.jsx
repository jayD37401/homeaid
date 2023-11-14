import React, { useState } from "react";
import "./SignUP.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { app } from ".././firebase";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const auth = getAuth(app);
// const history = useHistory();

const SignUP = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [con_password, setCon_password] = useState("");

  const create_user = async (e) => {
    e.preventDefault();

    if (password === con_password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Congratulations!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "dark",
        });
        // setTimeout(history.push("/registration"), 2000);
        // history.push("/registration");
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
    } else {
      toast.error("Password doesn't match!", {
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

  // const userId = "qwf6DRFwbPsfdRiAQScNNrdkQnBh23";

  // const writeUserData = async (e) => {
  //   e.preventDefault();
  //   const db = getDatabase(app);
  //   set(ref(db, "services/" + userId), {
  //     name: "Appliance Installation",
  //     detail:
  //       "Installation of various household appliances such as TVs, washing machines, etc.",
  //     price: "167",
  //   });
  //   console.log(userId);
  // };

  const getDesiredIdData = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const userId = user.uid;
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();

          // Get the first name and last name
          const { firstName, lastName } = userData;

          console.log("firstName: ", firstName);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const readAllUserData = async (e) => {
  //   e.preventDefault();
  //   const dbRef = ref(getDatabase(app));

  //   try {
  //     const snapshot = await get(child(dbRef, "users"));

  //     if (snapshot.exists()) {
  //       const userData = snapshot.val();
  //       const dataArray = []; // Declare an empty array to store user data

  //       for (const userId in userData) {
  //         if (Object.hasOwnProperty.call(userData, userId)) {
  //           const user = userData[userId];
  //           // Push the user data into the dataArray
  //           dataArray.push({
  //             firstName: user.firstName,
  //             lastName: user.lastName,
  //           });
  //         }
  //       }

  //       // Now dataArray contains all the user data
  //       console.log("User Data Array:", dataArray);
  //     } else {
  //       console.log("No user data available");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className="SignUP">
      <div className="paddings flexColStart Header">HomeAid.</div>
      <div className="paddings flexColCenter Whole_Page">
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
          className="infoForm_signup signupForm"
        >
          <h3 className="h3_signup">Sign up</h3>

          {/* <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput_signup"
              name="first_name"
              value={user.first_name}
              onChange={getUserData}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput_signup"
              name="last_name"
              value={user.last_name}
              onChange={getUserData}
              autoComplete="off"
            />
          </div> */}

          <div>
            <input
              type="text"
              placeholder="Email"
              className="infoInput_signup"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="off"
              required
            />
          </div>

          <div className="passwordContainer">
            <input
              type="password"
              className="infoInput_signup"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoComplete="off"
              required
            />
            <input
              type="password"
              className="infoInput_signup"
              placeholder="Confirm Password"
              onChange={(e) => setCon_password(e.target.value)}
              value={con_password}
              autoComplete="off"
              required
            />
          </div>

          <div>
            <span className="clickable" style={{ fontSize: "12px" }}>
              Already have an account?{" "}
              <a className="AuthText_signup" href="/signin">
                Sign In
              </a>
            </span>
            <button onClick={create_user} className="button1_signup">
              SignUp
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

export default SignUP;
