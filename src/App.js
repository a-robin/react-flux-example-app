import React, { Component } from "react";
import Header from "./components/common/header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Routes />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
