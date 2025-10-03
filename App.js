import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

// JSX - is not HTML in JS
// HTML like or XML like syntax
// JSX - (transpiled before it reaches the JS Engine)
// PARCEL
// babel
// JSX =>Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX 🚀
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
