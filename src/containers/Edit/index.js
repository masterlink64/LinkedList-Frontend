import { connect } from 'react-redux';
import Edit from '../../components/Edit';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    userProfile: reduxState.userProfile
  };
}

export default connect(mapStateToProps)(Edit);
