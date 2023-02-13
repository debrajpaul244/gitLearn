import React from "react";
import Card from "./Card";
import "./CardInner.css";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    title: "html",
    desc: "html is used for web markup.",
  },
  {
    title: "css",
    desc: "css is used for html stylized.",
  },
  {
    title: "javascript",
    desc: "javascript is used for make proggram in web devlopment.",
  },
];

const CardInner = () => {
  return (
    <div className="card_inner">
      {data &&
        data.map((x) => {
          return <Card key={uuidv4()} title={x.title} desc={x.desc} />;
        })}
    </div>
  );
};

export default CardInner;
