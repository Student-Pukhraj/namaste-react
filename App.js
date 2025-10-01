import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is namaster react 🚀"),
    React.createElement("h2", {}, "i'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i'm an h1 tag"),
    React.createElement("h2", {}, "i'm an h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);
