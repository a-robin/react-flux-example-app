import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthorActions from "../../actions/authorActions";

class AuthorList extends Component {
  deleteAuthor(id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
  }
  render() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td>
            <a href="" onClick={this.deleteAuthor.bind(this, author.id)}>
              Delete
            </a>
          </td>
          <Link to={`/author/${author.id}`}><td>{author.id}</td></Link>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };
    return (
      <div>
        <h1>Authors</h1>
        <Table>
          <thead>
            <tr>
              <th />
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </Table>
      </div>
    );
  }
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;
