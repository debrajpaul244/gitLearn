import React from "react";
import Child from "./Child";

function Parent(props) {
  function getData(data) {
    props.onData(data);
    console.log(data);
  }

  return (
    <div>
      <Child onData={getData} />
    </div>
  );
}

export default Parent;
