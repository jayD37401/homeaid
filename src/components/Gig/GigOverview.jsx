import React, { useState } from "react";
import "./GigOverview.css";
import ComboBox from "../../ComboBox";

const GigOverview = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleComboBoxChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const options = [
    { label: "--Choose a category--", value: "null" },
    { label: "Appliance Repair", value: "appliance-repair" },
    { label: "Carpentry Services", value: "carpentry" },
    { label: "Carpet Cleaning", value: "carpet-cleaning" },
    { label: "Electrical Services", value: "electrical" },
    { label: "Furniture Assembly", value: "furniture-assembly" },
    { label: "Handyman Services", value: "handyman" },
    { label: "HVAC Services", value: "hvac" },
    { label: "Home Organization", value: "organization" },
    { label: "Home Security Services", value: "security" },
    { label: "House Cleaning", value: "cleaning" },
    { label: "Interior Design", value: "interior-design" },
    { label: "Landscaping Services", value: "landscaping" },
    { label: "Moving Services", value: "moving" },
    { label: "Painting Services", value: "painting" },
    { label: "Pest Control", value: "pest-control" },
    { label: "Plumbing Services", value: "plumbing" },
    { label: "Pool Maintenance", value: "pool-maintenance" },
    { label: "Roofing Services", value: "roofing" },
    { label: "Window Cleaning", value: "window-cleaning" },
  ];

  return (
    <div className="Whole">
      <div className="paddings flexColStart Header">HomeAid.</div>
      <form className="g_form">
        {/* <h className="flexStart form_heading">Gig Overview</h> */}
        <div className="flexStart title">
          <div className="gig_title">
            <h className="flexStart heading">Title</h>
            <span className="detail">
              Maximize Your Gig's Visibility with Targeted Keywords in the Title
            </span>
          </div>
          <div className="textarea">
            <textarea
              type="text"
              placeholder="What you are good at?"
              required
              autoComplete="off"
              className="textarea infoInput_reg"
            />
          </div>
        </div>

        <div className="flexStart category">
          <div className="catagory_title">
            <h className="flexStart heading">Catagory</h>
            <span className="detail">
              Choose the category most suitable for your Gig asd asd as.
            </span>
          </div>
          <div>
            <ComboBox
              className="infoInput_reg"
              options={options}
              onChange={handleComboBoxChange}
            />
          </div>
        </div>
        <div className="innerWidth flexStart price">
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
        <div className="innerWidth flexStart description">
          <div className="desc_title">
            <h className="flexStart heading">Description</h>
            <span className="detail">
              Tell us about your work experiance and expertise asdas dasdasd !
            </span>
          </div>
          <div className="textarea">
            <textarea
              type="text"
              placeholder="What you are good at?"
              required
              autoComplete="off"
              className="textarea infoInput_reg"
            />
          </div>
        </div>
        <div className="flexEnd ">
          <button className="button1_reg">Save</button>
        </div>
      </form>
      <div class="footer">2023 HomeAid. All rights reserved.</div>
    </div>
  );
};

export default GigOverview;
