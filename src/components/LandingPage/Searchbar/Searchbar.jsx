import React from "react";
import { HiLocationMarker } from "react-icons/hi";
const Searchbar = () => {
  return (
    <div className="search-bar">
      <div className="input-container">
        <HiLocationMarker color="var(--blue)" size={25} />
        <input type="text" />
      </div>
      <div className="button-container">
        <button className="button-s">Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
