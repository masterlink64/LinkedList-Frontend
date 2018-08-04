import { connect } from 'react-redux';
import Edit from '../../components/Edit';
import { edit } from '../../store/actions/edit';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    userProfile: reduxState.userProfile
  };
}

export default connect(
  mapStateToProps,
  { edit }
)(Edit);
