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
      pictureUrl: 'products/GPUs/GeForce_GTX_1060.png',
      productUrl: 'https://www.amazon.com/EVGA-GeForce-Support-Graphics-06G-P4-6161-KR/dp/B01IPVSGEC',
      count:1,
    },
    {
      vendor: 'AMD',
      name:'R9 380',
      hashRate:22,
      power: 163,
      price: 250,
      count:1,
    },
    {
      vendor: 'AMD',
      name:'Rx 480',
      hashRate:20,
      power: 140,
      price: 200,
      count:1,
    },
    {
      vendor: 'NVIDIA',
      name:'GTX 1060',
      hashRate:17,
      power: 140,
      price: 220,
      count:1,
    },
  ]
);

const defaultPSUs = new Immutable.List(
  [
    {
        name: 'CX750M',
        vendor: 'Corsair',
        price: 79.99,
        powerSupply: 750,
        pictureUrl: 'products/PSUs/Corsair_CX750M.jpg',
        productUrl: 'https://www.amazon.com/Corsair-Bronze-Certified-Modular-CP-9020061-NA/dp/B00ALK3KEM',
    },
    {
        name: 'CX850M',
        vendor: 'Corsair',
        price: 109,
        powerSupply: 850,
        pictureUrl: 'products/PSUs/Corsair_CX850M.jpg',
        productUrl: 'https://www.amazon.com/Corsair-Bronze-Certified-Non-Modular-CP-9020123-NA/dp/B00OVCJKWC',
    },
    {
        name: '750 GQ',
        vendor: 'EVGA',
        price: 94.99,
        powerSupply: 750,
        pictureUrl: 'products/PSUs/EVGA_750GQ.jpg',
        productUrl: 'https://www.amazon.com/EVGA-Modular-Warranty-Supply-210-GQ-0750-V1/dp/B017HA3RGE',
    },
    {
        name: 'placeholder test',
        vendor: 'EVGA',
        price: 94.99,
        powerSupply: 750,
    },
  ]
);

const defaultMotherboards = new Immutable.List(
  [
    {
      name: 'GA-B250M-DS3H',
      vendor: 'GIGABYTE',
      socket: 'LGA 1151',
      pci: 3,
      price: 59.99,
      power: 50,
      formFactor: 'Micro ATX',
      pictureUrl: 'products/motherboards/GA-B250M-DS3H.png',
      productUrl: 'https://www.amazon.com/GIGABYTE-GA-B250M-DS3H-LGA1151-Intel-Motherboard/dp/B01N2WG23X',
    },
    {
      name: 'PRIME Z270-A',
      vendor: 'ASUS',
      socket: 'LGA 1151',
      pci: 5,
      price: 159,
      power: 60,
      formFactor: 'ATX',
      pictureUrl: 'products/motherboards/PRIME-Z270-A.png',
      productUrl: 'https://www.amazon.com/ASUS-PRIME-Z270-LGA1151-Motherboard/dp/B01NGTYV2Q',
    }
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
  allMotherboards: defaultMotherboards,
  motherboardsDialogOpen: false,
  loadDefaultDialogOpen: true,
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
    case actions.OPEN_MOTHERBOARDS_DIALOG:
      return {
        ...state,
        motherboardsDialogOpen: true,
      };
    case actions.CLOSE_MOTHERBOARDS_DIALOG:
      return {
        ...state,
        motherboardsDialogOpen: false,
      };
    case actions.OPEN_LOAD_DEFAULT_DIALOG:
      return {
        ...state,
        loadDefaultDialogOpen: true,
      };
    case actions.CLOSE_LOAD_DEFAULT_DIALOG:
      return {
        ...state,
        loadDefaultDialogOpen: false,
      };
    case actions.LOAD_DEFAULT_CONF:
      return {
        ...state,
        GPUs: state.GPUs.push(defaultGPUs.get(0)),
        PSU: defaultPSUs.get(0),
        motherboard: defaultMotherboards.get(0),
      };

    default:
      return state;
  }
};

export default configurator;
