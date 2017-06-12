import React, { Component } from "react";
import AuthorForm from "./authorForm";
import AuthorActions from "../../actions/authorActions";
import AuthorStore from "../../stores/authorStore";
import { Redirect, Prompt } from "react-router-dom";
import { ToastContainer, ToastMessage } from "react-toastr";

const toastMessageFactory = React.createFactory(ToastMessage.animation);

class ManageAuthorPage extends Component {
  state = {
    author: { id: "", firstName: "", lastName: "" },
    redirectToAuthors: false,
    errors: {},
    dirty: false
  };

  componentWillMount() {
    console.dir(this.props);

    if ("id" in this.props.match.params) {
      var authorLocal = AuthorStore.getAuthorById(this.props.match.params.id);
      this.setState({ author: authorLocal });
    }
  }
  authorFormIsValid() {
    var formIsValid = true;
    this.state.errors = {};
    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName =
        "First name must be at least three characters.";
      formIsValid = false;
    }
    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName =
        "Last name must be at least three characters.";
      formIsValid = false;
    }

    this.setState({ errors: this.state.errors });
    return formIsValid;
  }
  saveAuthor(event) {
    event.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }
    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author);
    } else {
      AuthorActions.createAuthor(this.state.author);
    }
    // Needs to be migrated at a higher level as the redirect state will prevent the toast container to be rendered
    // this.refs.container.success("Author saved.", "Duh!", {
    //   closeButton: true
    // });
    this.setState({ redirectToAuthors: true });
  }
  setAuthorState(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({
      author: this.state.author,
      dirty: this.state.author.firstName.length > 0 ||
        this.state.author.lastName.length > 0
    });
  }
  render() {
    if (this.state.redirectToAuthors) {
      return <Redirect to="/authors" />;
    }

    return (
      <div>
        <Prompt
          when={this.dirty}
          message={location => `Are you sure you want to go to leave ?`}
        />

        <ToastContainer
          ref="container"
          toastMessageFactory={toastMessageFactory}
          className="toast-top-right"
        />
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState.bind(this)}
          onSave={this.saveAuthor.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default ManageAuthorPage;
