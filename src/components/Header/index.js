import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserProfilePlaceholder from '../../images/user_placeholder.png';
import './style.css';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

const DEFAULT_STATE = {
  searchText: '',
  searchCategoryIdx: 0,
  isDropdownVisible: false,
  redirect: false,
  category: 'jobs'
};

export default class Header extends Component {
  state = DEFAULT_STATE;
  // set searchCat
  handleSearch = async e => {
    e.preventDefault();
    // ['companies', 'jobs', 'people']
    let searchCat = this.props.searchCategories[this.state.searchCategoryIdx];
    // if (this.state.searchCategoryIdx === 0) {
    //   searchCat = 'companies';
    // } else if (this.state.searchCategoryIdx === 1) {
    //   searchCat = 'jobs';
    // } else if (this.state.searchCategoryIdx === 2) {
    //   searchCat = 'users';
    // }
    // TODO: handle search feature!!!
    // this should invoke actionCreator functions to search the API with keyword

    try {
      await this.props.search(searchCat, this.state.searchText);
      this.setState({ redirect: true });

      //this.props.history.push('/results');
      // after this request is completed you get an updated redux state
      // dispatch action and will update redux state with the result of the API call
      // searchArr should be an arr of search terms.
    } catch (err) {
      console.log(err);
      return;
    }
    this.setState(DEFAULT_STATE);
  };
  // showMenu = evt => {
  //   evt.preventDefault();
  //   this.setState({ isDropdownVisible: true });
  // };
  // closeMenu = evt => {
  //   evt.preventDefault();
  //   this.setState({ isDropdownVisible: false });
  // };
  handleProfile = e => {
    // <Redirect to={`/users/${this.props.currentUser.username}`} />;
    this.props.history.push(`/users/${this.props.currentUser.username}`);
  };
  handleLogout = e => {
    localStorage.clear();
    this.props.logout();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = idx => {
    this.setState({ searchCategoryIdx: idx });
  };

  render() {
    const { searchText, searchCategoryIdx, isDropdownVisible } = this.state;
    // the props below are either from redux state or default props
    // NEED to mapStateToProps in order to get reduxState to props
    const {
      searchCategories,
      displayName,
      profilePic,
      currentUser
    } = this.props;
    if (this.state.redirect) {
      // return <Redirect to="/results"/>;
      this.props.history.push({
        pathname: '/results',
        state: {
          category: this.props.searchCategories[this.state.searchCategoryIdx]
        }
      });
    }
    return (
      <div className="Header">
        <Link to="/" className="Header-logo">
          LL
        </Link>
        <form className="search-form" onSubmit={this.handleSearch}>
          <div className="search">
            <span className="fas fa-search" />
            <input
              type="text"
              name="searchText"
              placeholder="Search for Companies, Jobs, or People"
              onChange={this.handleChange}
              value={searchText}
            />
          </div>
          <div className="search-categories">
            {searchCategories.map((category, i) => (
              <div key={category}>
                <input
                  type="radio"
                  id={category}
                  checked={i === searchCategoryIdx}
                  onChange={() => this.handleClick(i)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
          {/* link is preventing handleSubmit from working! */}
          {/* <Link to="/results"> */}
          <input type="submit" value="Search" className="search-btn" />
          {/* </Link> */}
        </form>
        <div className="profile-area" onClick={this.showMenu}>
          <img src={profilePic} alt="Profile" />
          {/* displayName is coming from currentUser */}
          {/* need to be able to grab current user from database */}
          {/* make button that will call currentUser(type:FETCH_CURRENT_USER_SUCCESS?) */}
          <span>{currentUser.first_name}</span>
          <div className={`dropdown-content`}>
            {/* link to logout */}
            <div onClick={this.handleProfile}>Profile</div>
            <div onClick={this.handleLogout}>Logout</div>
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  searchCategories: ['companies', 'jobs', 'users'],
  profilePic: UserProfilePlaceholder
};

Header.PropTypes = {
  searchCategories: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  profilePic: PropTypes.string
};
