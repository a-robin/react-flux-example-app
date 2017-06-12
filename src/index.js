import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import InitializeActions from "../src/actions/initializeActions";
import "./index.css";

InitializeActions.initApp();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
