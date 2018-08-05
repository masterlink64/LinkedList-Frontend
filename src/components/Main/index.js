import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import Homepage from '../../containers/Homepage';
import NoAuthRoute from '../../containers/NoAuthRoute';
import ProtectedRoute from '../../containers/ProtectedRoute';
// need to import new search component
import SearchResults from '../../containers/SearchResults';
import Profile from '../../containers/Profile';
import Edit from '../../containers/Edit';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          {/* NoAuthRoutes only let you go to them if you haven't authenticated */}
          <NoAuthRoute exact path="/login" component={Login} />
          <NoAuthRoute exact path="/signup" component={Signup} />
          {/* ProtectedRoutes only let you go to them if you are authenticated */}
          <ProtectedRoute exact path="/" component={Homepage} />
          <ProtectedRoute exact path="/results" component={SearchResults} />
          {/* route for profile page */}
          <ProtectedRoute exact path="/users/:username" component={Profile} />
          {/* route for editing profile what would the path look like?*/}
          <ProtectedRoute exact path="/edit" component={Edit} />
        </Switch>
      </div>
    );
  }
}
