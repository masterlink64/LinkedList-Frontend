import { connect } from 'react-redux';
import Header from '../../components/Header';
import { logout } from '../../store/actions/auth';
import { search } from '../../store/actions/search';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser
  };
}

export default connect(
  mapStateToProps,
  { logout, search }
)(Header);
