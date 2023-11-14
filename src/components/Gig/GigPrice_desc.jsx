import React from "react";
import "./GigPrice_desc.css";

const GigPrice_desc = () => {
  return (
    <div className="GigPrice_desc">
      <form className="gpd_form">
        <div className="paddings innerWidth flexStart price">
          <div className="price_title">
            <h className="flexStart heading">Price per hour</h>
            <span className="detail">
              Enter the price you want to charge per hour for your work!
            </span>
          </div>
          <div>
            <input
              type="number"
              placeholder="Price"
              required
              autoComplete="off"
              className="price_input"
            />
          </div>
        </div>
        <div className="paddings innerWidth flexStart description">
          <div className="desc_title">
            <h className="flexStart heading">Description</h>
            <span className="detail">
            Tell us about your work experiance and expertise!
            </span>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Experiance matters!"
              required
              autoComplete="off"
              className="gig_desc infoInput_reg"
            />
          </div>
        </div>
        <div className="flexEnd ">
          <button className="button1_reg">Save</button>
        </div>
      </form>
    </div>
  );
};

export default GigPrice_desc;
