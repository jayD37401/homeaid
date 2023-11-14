import React from "react";
import "./ServicesCard.css";
import { AiFillHeart } from "react-icons/ai";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ card }) => {
  const nevigate = useNavigate();
  return (
    <div
      className="flexColStart r-card"
      onClick={() => nevigate(`../service/${card.id}`)}
    >
      <AiFillHeart size={24} color="white" />
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">
        {truncate(card.title, { Length: 15 })}
      </span>
      <span className="secondaryText">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default ServicesCard;
