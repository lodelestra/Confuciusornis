let initialState = {
  initialMessage: 'hello',
};

const configurator = (state = initialState , action) => {
  switch (action.type) {
    case 'ADD_TEST':
      return [
        ...state,
        {
          id: action.id,
        }
      ]
    default:
      return state;
  }
};

export default configurator;