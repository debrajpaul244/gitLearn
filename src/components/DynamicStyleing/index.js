import React, { useEffect, useState } from "react";

const DynamicStyleing = () => {
  const [text, setText] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (text.length < 3) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [text]);

  function handelChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>DynamicStyleing</h1>
      <input
        style={{ color: validInput ? "blue" : "red" }}
        onChange={handelChange}
        value={text}
        type="text"
        placeholder="something..."
      />
    </div>
  );
};

export default DynamicStyleing;
