import React from "react";

function ReactHood() {
  return (
    <>
      {React.createElement(
        "div",
        {},
        React.createElement(
          "ul",
          {},
          React.createElement("li", {}, React.createElement("a", {}, "home")),
          React.createElement(
            "li",
            {},
            React.createElement("a", {}, "about us")
          ),
          React.createElement(
            "li",
            {},
            React.createElement("a", {}, "contact us")
          )
        )
      )}
    </>
  );
}

export default ReactHood;
