import Dispatcher from "../dispatcher/appDispatcher";
import ActionTypes from "../constants/actionTypes";
import { EventEmitter } from "eventemitter";
import _ from "lodash";

const CHANGE_EVENT = "change";

var _authors = [];

var AuthorStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  getAllAuthors() {
    return _authors;
  },
  getAuthorById(id) {
    return _.find(_authors, { id: id });
  }
});

Dispatcher.register(action => {
  switch (action.actionType) {
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      var existingAuthor = _.find(_authors, { id: action.author.id });
      var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, author => {
        return author.id === action.id;
      });
      AuthorStore.emitChange();
      break;
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    default:
  }
});

export default AuthorStore;
