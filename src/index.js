import React from "react";
import ReactDOM from "react-dom/client";
import MyTodoApp from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyTodoApp />
  </React.StrictMode>
);
