import React from "react";
import ReactDOM from "react-dom";

const Hello = () => React.createElement("h1", null, "Hello!");

ReactDOM.render(
  React.createElement(Hello), 
  document.getElementById("root")
);