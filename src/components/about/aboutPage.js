import React, { Component } from "react";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default AboutPage;
