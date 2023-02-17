import React, { useState } from "react";

function Faq(props) {
  let { id, title, content } = props.data;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id={id} className="d-flex ">
        <div className="top">
          <h2>{title}</h2>
          {isOpen && (
            <article>
              <p>{content}</p>
            </article>
          )}
        </div>
        <div className="bottom">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Faq;
