import React, { Component } from "react";
import AuthorStore from "../../stores/authorStore";
import AuthorList from "./authorList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class AuthorPage extends Component {
  state = {
    authors: []
  };
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    AuthorStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    AuthorStore.removeChangeListener(this._onChange);
  }
  componentDidMount() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  }
  _onChange() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  }
  render() {
    return (
      <div>
        <AuthorList authors={this.state.authors} />
        <Link to="/author"><Button>Add Author</Button></Link>
      </div>
    );
  }
}

export default AuthorPage;
