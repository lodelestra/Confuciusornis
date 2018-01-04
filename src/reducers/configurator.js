import Immutable from 'immutable';

import * as actions from '../actions/index.js'

const defaultGPUs = new Immutable.List(
  [
    {
      vendor: 'NVIDIA',
      name:'Geforce GTX 1060 6GB',
      hashRate:23,
      power: 120,
      price: 264.99,
    },
    {
      vendor: 'AMD',
      name:'R9 380',
      hashRate:22,
      power: 163,
      price: 250,
    },
    {
      vendor: 'AMD',
      name:'Rx 480',
      hashRate:20,
      power: 140,
      price: 200,
    },
    {
      vendor: 'NVIDIA',
      name:'GTX 1060',
      hashRate:17,
      power: 140,
      price: 220,
    },
  ]
);

const defaultPSUs = new Immutable.List(
  [
    {
        name: 'CX750M',
        vendor: 'Corsair',
        price: 79,
        powerSupply: 750,
        pictureUrl: 'products/PSUs/Corsair_CX750M.jpg'
    },
    {
        name: 'CX850M',
        vendor: 'Corsair',
        price: 109,
        powerSupply: 850,
        pictureUrl: 'products/PSUs/Corsair_CX850M.jpg'
    },
    {
        name: '750 GQ',
        vendor: 'EVGA',
        price: 94.99,
        powerSupply: 750,
        pictureUrl: 'products/PSUs/EVGA_750GQ.jpg'
    },
    {
        name: 'placeholder test',
        vendor: 'EVGA',
        price: 94.99,
        powerSupply: 750,
    },
  ]
);

let initialState = {
  GPUs: new Immutable.List(),
  allGPUs: defaultGPUs,
  gpusDialogOpen: false,
  gpusDialogFilters: {
    vendor:'All',
  },
  allPSUs: defaultPSUs,
  psusDialogOpen: false,
};

const configurator = (state = initialState , action) => {
  switch (action.type) {
    case 'ADD_GPU':
      return {
          ...state,
          GPUs: state.GPUs.push(action.GPU),
        };
    case 'REMOVE_GPU_AT':
        return {
          ...state,
          GPUs: state.GPUs.splice(action.index, 1),
        };
    case 'ADD_GPU_COUNT_AT':
      return {
          ...state,
          GPUs: state.GPUs.update(action.index, gpu => ({...gpu, count:gpu.count+1})),
        };
    case 'REMOVE_GPU_COUNT_AT':
      return {
          ...state,
          GPUs: state.GPUs.update(action.index, gpu => ({...gpu, count:gpu.count-1})),
        };
    case 'ADD_MOTHERBOARD':
      return {
          ...state,
          motherboard: action.motherboard,
        };
    case 'REMOVE_MOTHERBOARD':
      return {
          ...state,
          motherboard: undefined,
        };
    case actions.ADD_PSU:
      return {
          ...state,
          PSU: action.PSU,
        };
    case actions.REMOVE_PSU:
      return {
          ...state,
          PSU: undefined,
        };
    case actions.OPEN_GPUS_DIALOG:
      return {
        ...state,
        gpusDialogOpen: true,
      };
    case actions.CLOSE_GPUS_DIALOG:
      return {
        ...state,
        gpusDialogOpen: false,
      };
    case actions.CHANGE_GPUS_DIALOG_FILTERS:
      return {
        ...state,
        gpusDialogFilters: action.filters,
      };
    case actions.OPEN_PSUS_DIALOG:
      return {
        ...state,
        psusDialogOpen: true,
      };
    case actions.CLOSE_PSUS_DIALOG:
      return {
        ...state,
        psusDialogOpen: false,
      };

    default:
      return state;
  }
};

export default configurator;
