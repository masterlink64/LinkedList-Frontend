import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
// import './style.css';
import Card from '../Card';

export default class SearchResults extends Component {
  render() {
    const { search } = this.props;
    let displaySearch;
    let category = this.props.location.state.category;
    if (search.length === 0) {
      displaySearch = (
        <h3>Sorry, no search right now. Please try again later.</h3>
      );
    } else {
      //console.log('CATEGORY', this.props.location.category.category);
      if (category === 'companies') {
        displaySearch = this.props.search.map(result => (
          <Card
            category={category}
            key={result.name}
            handle={result.handle}
            logo={result.logo}
            name={result.name}
            email={result.email}
          />
        ));
      } else if (category === 'users') {
        displaySearch = this.props.search.map(result => (
          <Card
            category={category}
            key={result.username}
            first_name={result.first_name}
            last_name={result.last_name}
            photo={result.photo}
            email={result.email}
            username={result.username}
            current_company={result.current_company}
          />
        ));
      } else {
        displaySearch = this.props.search.map(result => (
          <Card
            key={result.id}
            title={result.title}
            company={result.company}
            salary={result.salary}
            equity={result.equity}
          />
        ));
      }
    }

    return (
      <div>
        <Header {...this.props} />
        <div className="feed">
          <h1>Search Results!!!</h1>
          {displaySearch}
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  // where is currentUser?
  currentUser: PropTypes.object,
  search: PropTypes.array.isRequired
};
