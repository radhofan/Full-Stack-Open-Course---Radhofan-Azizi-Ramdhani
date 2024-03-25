const initialStats = {
  good: 0,
  ok: 0,
  bad: 0
};

const statsReducer = (state = initialStats, action) => {
  console.log(action);
  switch (action.type) {
    case 'DO_NOTHING':
      return state;
    case 'GOOD':
      return {
        ...state,
        good: state.good + 1
      };
    case 'OK':
      return {
        ...state,
        ok: state.ok + 1
      };
    case 'BAD':
      return {
        ...state,
        bad: state.bad + 1
      };
    case 'ZERO':
      return initialStats;
    default:
      return state;
  }
};

export default statsReducer;
