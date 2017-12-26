import Configurator from './presenter';
import { connect } from 'react-redux';
import { addGPU, removeGPUAt, removeGPUCountAt, addGPUCountAt } from '../../actions';

const displayAlert = (text) => {
  alert(text);
}

const mapStateToProps = state => {
  const rigHashRate = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.hashRate*gpu.count,0);
  const rigGPUPrice = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.price*gpu.count,0); //TODO
  const rigPrice = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.price*gpu.count,0);
  const rigPower = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.power*gpu.count,0);

  //to load
  const ethPrice = 750.63;
  const netHashGH = 148106.38;
  const blockTime = 14.17; //sec
  const difficulty = 1854000000000000

  let netEthPerDay = 3*24*60*60 / blockTime;
  const rigEthPerDay = (netEthPerDay*rigHashRate*1e6)/(netHashGH * 1e9)

  const rigRevenuByDay = rigEthPerDay*ethPrice;
  const rigRevenuByMonth = 70;

  return {
    ...state.configurator,
    rigHashRate,
    rigGPUPrice,
    rigPrice,
    rigPower,
    ethPrice,
    rigRevenuByDay,
    rigRevenuByMonth,
  }
}

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const mapDispatchToProps = dispatch => {
  return ({
    onMount : displayAlert,
    onAddGPUClick : () =>{
      dispatch(addGPU({
        name:['R9 380','R9 390x','RX 480'].random(),
        hashRate:[27,12,34].random(),
        power: [123,243,233].random(),
        price:[250,320,340].random(),
        count:[2,3].random(),
      }))
    },
    onRemoveGPUClick : (index) =>{
      dispatch(removeGPUAt(index))
    },
    onRemoveGPUCountClick : (index) => {
      dispatch(removeGPUCountAt(index))
    },
    onAddGPUCountClick: (index) => {
      dispatch(addGPUCountAt(index))
    },
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Configurator);
