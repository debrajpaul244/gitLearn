import React from "react";
import "./Card.css";

const Card = () => {
  const title = "this is a card";
  const desc =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, earum.";
  let date = new Date();
  let getDate = date.getDate();
  let getMonth = date.getMonth();
  let getYear = date.getFullYear();

  let currentDate = `${getDate}/${getMonth + 1}/${getYear}`;

  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        <p>{desc}</p>
        <h2>{currentDate}</h2>
      </div>
    </>
  );
};

export default Card;
