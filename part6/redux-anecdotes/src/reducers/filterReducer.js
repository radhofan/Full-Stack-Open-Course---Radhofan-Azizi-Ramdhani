const visibilityFilterReducer = (state = null, action) => { // Changed reducer name
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': // Changed action type
      return action.filter;
    default:
      return state;
  }
};

export const setVisibilityFilter = (filter) => { // Changed action creator name
  return {
    type: 'SET_VISIBILITY_FILTER', // Changed action type
    filter,
  };
};

export default visibilityFilterReducer;
