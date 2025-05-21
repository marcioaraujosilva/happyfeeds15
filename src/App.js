import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";

export const App = () => React.createElement(
  "div", {className: "app"}, 
  React.createElement(Header),
  React.createElement(
    "div",
    {className: "container"},
    React.createElement(Sidebar),
    React.createElement(Feed),
  ),
);