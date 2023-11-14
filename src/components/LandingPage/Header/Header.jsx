import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { app } from "../../../firebase";
import { getDatabase, ref, set, child, get } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import AddPropertyModel from "../../AddPropertyModel/AddPropertyModel";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const handleAddPropertyClick = () => {
    const auth = getAuth(app);
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setModalOpened(true);
        console.log("User is signed in:", user.uid);
      } else {
        console.log("No user is signed in.");
      }
    });
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {/* <img src="./brown-logo2.png" alt="logo" width={180} /> */}
        <Link to="/">
          <div className="paddings logo-title">
            <h1>HomeAid.</h1>
          </div>
        </Link>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/Service">Services</NavLink>
            <a href="/">Contact</a>

            {/* add property */}
            <div onClick={handleAddPropertyClick}>Add Property</div>
            <AddPropertyModel opened={modalOpened} setOpened={setModalOpened} />

            <button className="button">
              <NavLink to="/signin"> Sign In</NavLink>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
