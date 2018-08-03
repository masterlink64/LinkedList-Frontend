import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import { Link } from 'react-router-dom';
// create profile card
// import ProfileCard from '../../components/ProfileCard';
import './style.css';

export default class Profile extends Component {
  // componentDidMount(){ this.props.fetchUserProfile}
  render() {
    let displayProfile;
    const {
      first_name,
      last_name,
      email,
      photo,
      current_company
    } = this.props.currentUser;
    // console.log(this.props.match.params.username);
    if (this.props.match.params.username === this.props.currentUser.username) {
      // make card for logged in user!
      displayProfile = (
        <div className="Profile">
          <img className="Profile-Pic" src={photo} alt="#" />
          <div className="Profile-Details">
            <h2>
              {first_name} {last_name}
            </h2>
            <h3>Employed by @{current_company}</h3>
            <div>
              <div className="edit">
                <Link to="/">Edit</Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      const {
        first_name,
        last_name,
        email,
        photo,
        current_company
      } = this.props.userProfile;
      // build a card for someone's else profile

      displayProfile = (
        <div>
          <img src={photo} alt="#" />
          <h2>
            {first_name} {last_name}
          </h2>
          <h3>
            <s>@{current_company}</s>
          </h3>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <div className="feed">
          <h1>My Profile</h1>
          {displayProfile}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  // where is currentUser?
  currentUser: PropTypes.object,
  userProfile: PropTypes.object
};
