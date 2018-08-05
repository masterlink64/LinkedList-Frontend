import { connect } from 'react-redux';
import SearchResults from '../../components/SearchResults';

function mapStateToProps(reduxState) {
  return {
    search: reduxState.search
  };
}

export default connect(mapStateToProps)(SearchResults);
