import React, { useState, useEffect } from "react";
import "./GigCreate.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import ComboBox from "../../ComboBox";
import AddPropertyModel from "../AddPropertyModel/AddPropertyModel";
const GigCreate = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleAddPropertyClick = () => {};
  useEffect(() => {
    setModalOpened(true);
  }, []);

  return (
    <div>
      <div className="OK" onClick={handleAddPropertyClick}>
        OK
      </div>
      <AddPropertyModel opened={modalOpened} setOpened={setModalOpened} />
    </div>
  );
};

export default GigCreate;
