import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/homePage";
import AuthorPage from "./components/authors/authorPage";
import ManageAuthorPage from "./components/authors/manageAuthorPage";
import About from "./components/about/aboutPage";
import NotFound from "./components/notFound";

const Routes = () => (
  <div>
    <Switch>
      <Route path="/home" exact component={HomePage} />
      <Route path="/authors" component={AuthorPage} />
      <Route path="/author/:id" component={ManageAuthorPage} />
      <Route path="/author/" component={ManageAuthorPage} />
      <Route path="/about" component={About} />
      <Redirect from="/about-us" to="/about" />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default Routes;
