import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import './style.css';
import Card from '../Card';
import { getToken } from '../../services/token';
import jwtDecode from 'jwt-decode';

export default class Homepage extends Component {
  componentDidMount() {
    this.props.fetchJobsRequest();
    // fetch current user
    this.props.fetchCurrentUserRequest(this.props.username);
  }

  render() {
    const { jobs } = this.props;
    let displayJobs;
    if (jobs.length === 0) {
      displayJobs = (
        <h3>Sorry, no jobs are available right now. Please try again later.</h3>
      );
    } else {
      displayJobs = this.props.jobs.map(job => (
        <Card
          key={job.id}
          title={job.title}
          company={job.company}
          salary={job.salary}
          equity={job.equity}
        />
      ));
    }

    return (
      <div>
        <Header {...this.props} />
        <div className="feed">
          <h1>Jobs</h1>
          {displayJobs}
        </div>
      </div>
    );
  }
}

Homepage.defaultProps = {
  category: 'jobs'
};

Homepage.propTypes = {
  // where is currentUser?
  currentUser: PropTypes.object,
  jobs: PropTypes.array.isRequired
};
