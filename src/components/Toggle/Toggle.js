import React, { useState } from "react";

function Toggle() {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <>
      <h2>what is lorem ipsum ?</h2>
      {isToggle && (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at
            earum soluta ut, aliquid tenetur eum temporibus officia inventore
            voluptas aliquam natus est laborum placeat nemo eius quaerat iusto
            deserunt?
          </p>
        </div>
      )}
      <button onClick={() => setIsToggle(!isToggle)}>{isToggle ? "Hide": "Show"}</button>
     
    </>
  );
}

export default Toggle;
