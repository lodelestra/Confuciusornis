import Immutable from 'immutable';

let initialState = {
  initialMessage: 'hello',
  GPUs: new Immutable.List(),
};

const configurator = (state = initialState , action) => {
  switch (action.type) {
    case 'ADD_TEST':
      return {
          ...state,
          id: action.id,
        };
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
    default:
      return state;
  }
};

export default configurator;