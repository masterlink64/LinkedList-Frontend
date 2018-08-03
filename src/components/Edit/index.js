import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import { Link } from 'react-router-dom';
import './style.css';

export default class Edit extends Component {
  // when submitting form should trigger a thunk to POST to API with new data
  // thunk should also trigger a dispatch to update reduxState
  // mapDispatchtoProps in edit container to get access to actionCreator/thunk
  // make edit reducer in  reducer and add to combine reducer
  //
  render() {
    // will need an function for submitting form
    // will need a function for listening to form and a controlled component

    return (
      <div>
        <Header />
        <div className="Edit">
          <h1>Edit Form</h1>
        </div>
      </div>
    );
  }
}

Edit.propTypes = {
  currentUser: PropTypes.object,
  userProfile: PropTypes.object
};
