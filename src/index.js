/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

if (module.hot) {
  module.hot.accept();

  window.addEventListener("message", e => {
    if (process.env.NODE_ENV !== "production") {
      console.clear();
    }
  });
}

ReactDOM.render(<App />, document.getElementById("root")); // eslint-disable-line
registerServiceWorker();
