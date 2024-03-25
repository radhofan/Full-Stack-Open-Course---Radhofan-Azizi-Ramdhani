import deepFreeze from 'deep-freeze';
import statsReducer from './statsReducer'; 

describe('stats reducer', () => { 
  const initialStats = { 
    good: 0,
    ok: 0,
    bad: 0
  };

  test('should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING'
    };

    const newState = statsReducer(undefined, action); 
    expect(newState).toEqual(initialStats);
  });

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    };

    deepFreeze(initialStats);
    const newState = statsReducer(initialStats, action); 
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    });
  });

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    };

    deepFreeze(initialStats);
    const newState = statsReducer(initialStats, action); 
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    });
  });

  test('ok is incremented', () => {
    const action = {
      type: 'OK'
    };

    deepFreeze(initialStats);
    const newState = statsReducer(initialStats, action); 
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    });
  });

  test('reset to zero', () => {
    const action = {
      type: 'ZERO'
    };

    deepFreeze(initialStats);
    const newState = statsReducer(initialStats, action); 
    expect(newState).toEqual(initialStats);
  });
});
