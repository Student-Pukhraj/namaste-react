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

// React Element

const elem  = <span>React Element</span>
const title = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX 🚀
  </h1>
);

const Title = () => (
  <h1 className="head" tabIndex="1">
  {elem}
    Namaste React using JSX 🚀
  </h1>
);

const fn1 = () => true;

const fn2 = () => {
  return true;
}

// React Component
// - Class based Component - OLD
// - Functional Component - NEW

// React Functional Component
const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>
}

const number = 10000; 

// Component Composition
const HeadingComponent2 = () => (
    <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    {title}
    <h2>{number}</h2>
   <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
 