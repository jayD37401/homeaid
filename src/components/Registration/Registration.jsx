import React, { useState } from "react";
import "./Registration.css"; // Import the CSS file
import { app } from "../../firebase";
import { getDatabase, ref, set } from "firebase/database";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);
const database = getDatabase(app);

const Registration = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [userCnic, setuserCnic] = useState("");
  const [userType, setuserType] = useState("");
  const [userAddress, setuserAddress] = useState("");

  const check_signin = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const uid = user.uid;
    set(ref(database, "users/" + uid), {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      userCnic: userCnic,
      userType: userType,
      userAddress: userAddress,
    });
  };
  return (
    <div className="login-container">
      <div className="paddings flexColStart Header">HomeAid.</div>
      <form className="infoForm_reg regForm">
        <h3 className="card_heading ">Registeration</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput_reg"
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
            autoComplete="off"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput_reg"
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}
            autoComplete="off"
            required
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput_reg"
            placeholder="Username"
            onChange={(e) => setuserName(e.target.value)}
            value={userName}
            autoComplete="off"
            required
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput_reg"
            placeholder="User Type"
            onChange={(e) => setuserType(e.target.value)}
            value={userType}
            autoComplete="off"
            required
          />
          <input
            type="text"
            className="infoInput_reg"
            name="cnic"
            placeholder="CNIC"
            onChange={(e) => setuserCnic(e.target.value)}
            value={userCnic}
            autoComplete="off"
            required
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput_reg"
            name="address"
            placeholder="Address"
            onChange={(e) => setuserAddress(e.target.value)}
            value={userAddress}
            autoComplete="off"
            required
          />
        </div>
        <button onClick={check_signin} className="button1_reg">
          Signup
        </button>
      </form>
      <div class="footer">2023 HomeAid. All rights reserved.</div>
    </div>
  );
};

export default Registration;
