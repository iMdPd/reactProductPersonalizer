import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import "./styles/normalize.scss";
import "./styles/global.scss";
import "font-awesome/css/font-awesome.min.css";

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
