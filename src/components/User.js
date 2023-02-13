import React from "react";

const User = (props) => {
  return (
    <>
      <div className="user">
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h4>{props.phone.map((x) => x.home)}</h4>
        <h4>{props.phone.map((x) => x.office)}</h4>
      </div>
    </>
  );
};

export default User;
