import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  let handelIncrement = () => {
    setCount(count + 1);
  };

  function handelDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handelIncrement}>+</button>
      <button onClick={handelDecrement}>-</button>
    </div>
  );
}

export default UseState;
