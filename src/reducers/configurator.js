import Immutable from 'immutable';

import * as actions from '../actions/index.js'

import {defaultGPUs, defaultPSUs, defaultMotherboards} from './defaultData'

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
        motherboard: defaultMotherboards.get(1),
      };

    default:
      return state;
  }
};

export default configurator;
