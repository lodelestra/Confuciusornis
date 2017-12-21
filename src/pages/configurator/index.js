import Configurator from './presenter';
import { connect } from 'react-redux';

const displayAlert = (text) => {
  alert(text);
}

const mapStateToProps = state => {
  return {
    ...state.configurator,
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    onMount : displayAlert,
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Configurator);