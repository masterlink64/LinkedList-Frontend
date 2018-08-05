import { connect } from 'react-redux';
import Card from '../../components/Card';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    search: reduxState.search
  };
}

export default connect(mapStateToProps)(Card);
