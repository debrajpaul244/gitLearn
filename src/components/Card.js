import React from "react";
import "./Card.css";

const Card = (props) => {
  let { title, desc } = props;
  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default Card;
