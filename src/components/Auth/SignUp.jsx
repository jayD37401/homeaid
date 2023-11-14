import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="Parent">
      <Header />
      <div className="Auth">
        <div className="a-left">
          <SignUpL />
          <SignUpR />
        </div>
      </div>
      <Footer />
    </div>
  );
};

function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings flexColEnd f-right">
        <div className="flexCenter f-menu">
          <span className="primaryText h">FAQs</span>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className=" headerr paddings innerwidth">
      <h11>HomeAid</h11>
      {/* <img src="logo1.png" alt="" width={150} /> */}
    </div>
  );
}

function SignUpL() {
  return (
    <div>
      <h11>HomeAid</h11>
      <h1>Get Started.</h1>
      <span className="secondaryText">
        Explore the ideas throughout the world
      </span>
    </div>
  );
}
function SignUpR() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account?{" "}
            <a className="AuthText" href="/Auth">
              Sign In.
            </a>
          </span>
        </div>
        <button className="button1 infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
export default SignUp;
