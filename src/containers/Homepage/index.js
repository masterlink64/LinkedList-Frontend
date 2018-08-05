import { connect } from 'react-redux';
import Homepage from '../../components/Homepage';
import { fetchJobsRequest } from '../../store/actions/jobs';
import { fetchCurrentUserRequest } from '../../store/actions/currentUser';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    jobs: reduxState.jobs,
    username: reduxState.currentUser.username
  };
}

export default connect(
  mapStateToProps,
  { fetchJobsRequest, fetchCurrentUserRequest }
)(Homepage);
