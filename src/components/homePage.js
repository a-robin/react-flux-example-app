import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Pluralsight Administration</h1>
        <p>React, React Router, and Flux for ultra-responsive web apps.</p>
        <Link to="About">
          <Button bsStyle="primary" bsSize="large">
            Learn More
          </Button>
        </Link>
      </Jumbotron>
    );
  }
}

export default Home;
