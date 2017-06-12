import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Input from "../common/textInput";
import { PropTypes } from "prop-types";

class AuthorForm extends Component {
  propTypes: {
    author: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
  };
  render() {
    return (
      <form>
        <h1>Manage Author</h1>
        <Input
          label="First Name"
          name="firstName"
          value={this.props.author.firstName}
          onChange={this.props.onChange}
          error={this.props.errors.firstName}
        />
        <br />
        <Input
          label="Last Name"
          name="lastName"
          value={this.props.author.lastName}
          onChange={this.props.onChange}
          error={this.props.errors.lastName}
        />
        <br />
        <Button type="submit" onClick={this.props.onSave}>Save</Button>
      </form>
    );
  }
}

export default AuthorForm;
