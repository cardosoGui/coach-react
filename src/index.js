import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "../src/components/helpers/History";
import "./style/style";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
