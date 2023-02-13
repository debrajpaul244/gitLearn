import React from "react";
import Card from "./Card";
import "./CardInner.css";

const CardInner = () => {
  return (
    <div className="card_inner">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardInner;
