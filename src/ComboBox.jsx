import React from "react";
import "./ComboBox.css";

const ComboBox = ({ options, onChange }) => {
  return (
    <select className="select" onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default ComboBox;
