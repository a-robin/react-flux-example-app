import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <p>Whoops! Sorry, there is nothing to be there.</p>
    <p><Link to="/">Back to Home</Link></p>
  </div>
);

export default NotFound;