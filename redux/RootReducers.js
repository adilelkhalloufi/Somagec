const initialState = {
  abonne: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_ABONNE': {
      return {
        ...state,
        abonne: action.abonne,
      };
    }

    default:
      return state;
  }
};

export default reducer;
