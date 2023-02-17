import React from "react";
import Faq from "./Faq";

function Faqs(props) {
  return (
    <>
      <Faq data={props.faq} />
    </>
  );
}

export default Faqs;
