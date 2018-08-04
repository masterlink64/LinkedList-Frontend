import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './style.css';

export default class Edit extends Component {
  // when submitting form should trigger a thunk to POST to API with new data
  // thunk should also trigger a dispatch to update reduxState
  // mapDispatchtoProps in edit container to get access to actionCreator/thunk
  // make edit reducer in  reducer and add to combine reducer
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      // initial state
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      current_company: this.props.currentUser.current_company,
      username: this.props.currentUser.username,
      password: this.props.currentUser.password,
      photo: this.props.currentUser.photo,
      email: this.props.currentUser.email,
      confirm_password: ''
    };
  }

  // will need an function for submitting form
  // will need a function for listening to form and a controlled component
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    // debugger;
    evt.preventDefault();

    var { confirm_password, ...payload } = this.state;

    if (this.state.password === '') {
      var { password, confirm_password, ...payload } = this.state;
      // debugger;
    }
    // edit is a thunk that will send request to update db with new payload (new user data obj)
    this.props.edit(this.state.username, payload);
    // redirect to profilepage
    // <Redirect to={`/users/${this.props.username}`} />;
    this.props.history.push(`/users/${this.state.username}`);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="Edit">
          <h1>Edit Form</h1>
          <img src={this.state.photo} alt="placeholder photo" />
          {/* form for editing */}
          <form onSubmit={this.handleSubmit} className="Edit-form">
            <div>
              <label htmlFor="first" />
              <input
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="last" />
              <input
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="current_company">Employed by</label>
              <input
                type="text"
                name="current_company"
                value={this.state.current_company}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>

            <label htmlFor="password">New Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Done</button>
            <button
              onClick={() =>
                this.props.history.push(`/users/${this.state.username}`)
              }
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Edit.propTypes = {
  currentUser: PropTypes.object,
  userProfile: PropTypes.object
};
