import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const initialState = { good: 0, ok: 0, bad: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      return { ...state, good: state.good + 1 };
    case 'OK':
      return { ...state, ok: state.ok + 1 };
    case 'BAD':
      return { ...state, bad: state.bad + 1 };
    case 'ZERO':
      return initialState;
    default:
      return state;
  }
};

const store = createStore(counterReducer);
const good = () => ({ type: 'GOOD' });
const ok = () => ({ type: 'OK' });
const bad = () => ({ type: 'BAD' });
const resetStats = () => ({ type: 'ZERO' });


const App = ({ goodCount, okCount, badCount, handleGood, handleOk, handleBad, handleReset }) => {
  return (
    <div>
      <button onClick={handleGood}>good</button>
      <button onClick={handleOk}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <button onClick={handleReset}>reset stats</button>
      <div>good {goodCount}</div>
      <div>neutral {okCount}</div>
      <div>bad {badCount}</div>
    </div>
  );
};


const mapStateToProps = state => ({
  goodCount: state.good,
  okCount: state.ok,
  badCount: state.bad
});

const mapDispatchToProps = {
  handleGood: good,
  handleOk: ok,
  handleBad: bad,
  handleReset: resetStats
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
