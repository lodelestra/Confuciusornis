import Configurator from './presenter';
import { connect } from 'react-redux';
import { addGPU, removeGPUAt, removeGPUCountAt, addGPUCountAt } from '../../actions';
import { addMotherboard, removeMotherboard } from '../../actions';
import { addPSU, removePSU } from '../../actions';
import { openGpusDialog, closeGpusDialog } from '../../actions';

const mapStateToProps = state => {
  const rigHashRate = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.hashRate*gpu.count,0);
  const rigGPUPrice = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.price*gpu.count,0); //TODO
  const rigPrice = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.price*gpu.count,0);
  let rigPower = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.power*gpu.count,0);
  if(state.configurator.motherboard){
    rigPower += state.configurator.motherboard.power;
  }
  const rigPCIUsage = state.configurator.GPUs.reduce((sum,gpu)=>sum+gpu.count,0);

  //to load
  const ethPrice = 750.63;
  const netHashGH = 148106.38;
  const blockTime = 14.17; //sec

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
    rigPCIUsage,
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
    onMount : () =>{
      dispatch(addGPU({
        name:['R9 380','R9 390x','RX 480'].random(),
        hashRate:[27,12,34].random(),
        power: [123,243,233].random(),
        price:[250,320,340].random(),
        count:[2,3].random(),
      }))
    },
    onAddGPUClick : () =>{
      dispatch(
        openGpusDialog()
      )
    },
    onGpusDialogClose : (value) =>{
      //TODO dispatch add gpu by value
      if(value){
        console.log(value);
      }
      dispatch(
        closeGpusDialog()
      )
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
    onAddMotherboardClick: () => {
      dispatch(addMotherboard({
        name: 'Asus 8',
        socket: [1117,1115,1200].random(),
        pci: 5,
        price:[79,83,91].random(),
        power:[50,55,62].random(),
      }))
    },
    onRemoveMotherboardClick: () => {
      dispatch(removeMotherboard())
    },
    onAddPSUClick: () => {
      dispatch(addPSU({
        name: 'corsair',
        price:[79,83,91].random(),
        powerSupply:[650,750,800].random(),
      }))
    },
    onRemovePSUClick: () => {
      dispatch(removePSU())
    },
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Configurator);
