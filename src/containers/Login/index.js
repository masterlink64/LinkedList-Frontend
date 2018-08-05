import { connect } from 'react-redux';
import Login from '../../components/Login';
import { authRequest } from '../../store/actions/auth';
import { fetchCurrentUserRequest } from '../../store/actions/currentUser';
import { setError, clearError } from '../../store/actions/error';

function mapStateToProps(reduxState) {
  return {
    error: reduxState.error,
    username: reduxState.currentUser.username
  };
}
export default connect(
  mapStateToProps,
  { authRequest, setError, clearError, fetchCurrentUserRequest }
)(Login);
