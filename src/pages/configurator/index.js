import Configurator from './presenter';
import { connect } from 'react-redux';
import { addGPU, removeGPUAt } from '../../actions';

const displayAlert = (text) => {
  alert(text);
}

const mapStateToProps = state => {
  const rigHashRate = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.hashRate*gpu.count,0);
  const rigPrice = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.price*gpu.count,0);

  return {
    ...state.configurator,
    rigHashRate,
    rigPrice,
  }
}
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const mapDispatchToProps = dispatch => {
  return ({
    onMount : displayAlert,
    onAddGPUClick : () =>{
      dispatch(addGPU({name:['R9 380','R9 390x','RX 480'].random(), hashRate:[27,12,34].random(), price:[250,320,340].random(), count:[1,2,3].random()}))
    },
    onRemoveGPUClick : (index) =>{
      dispatch(removeGPUAt(index))
    }
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Configurator);