import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
// import './style.css';
import Card from '../Card';

export default class SearchResults extends Component {
  render() {
    const { search } = this.props;
    let displaySearch;
    if (search.length === 0) {
      displaySearch = (
        <h3>Sorry, no search right now. Please try again later.</h3>
      );
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

    return (
      <div>
        <Header />
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
