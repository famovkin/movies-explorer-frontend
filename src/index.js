import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./components/App/App";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);
