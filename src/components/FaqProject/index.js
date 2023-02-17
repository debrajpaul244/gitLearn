import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Faqs from "./Faqs";

const dymmyFaqs = [
  {
    id: uuidv4(),
    title: "html",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
  },

  {
    id: uuidv4(),
    title: "css",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
  },

  {
    id: uuidv4(),
    title: "JavaScript",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
  },
];

function Index() {
  let [faqs, swtFaqs] = useState(dymmyFaqs);

  return (
    <>
      <div className="d-flex  justify-content-center">
        {faqs && faqs.map((faq) => <Faqs key={faq.id} faq={faq} />)}
      </div>
    </>
  );
}

export default Index;
