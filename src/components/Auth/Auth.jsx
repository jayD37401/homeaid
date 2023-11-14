import React from "react";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <div className="Webnamee">
          <h1>Unlock Now</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <LogIn />
    </div>
  );
};
function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span className="clickable" style={{ fontSize: "12px" }}>
            Don't have an account?{" "}
            <a className="AuthText" href="/SignUp">
              Sign Up.
            </a>
          </span>
          <button className="button1 infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
