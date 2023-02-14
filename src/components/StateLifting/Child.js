import React from "react";

function Child(props) {
  const data = "hi this is debraj";
  props.onData(data);
  console.log(data);

  return <div>Child</div>;
}

export default Child;
