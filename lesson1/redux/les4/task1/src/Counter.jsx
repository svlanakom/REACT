import React from "react";
import { connect } from "react-redux";
import * as counterAction from "./counter.actions";

const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapState = (state) => {
  return {
    counter: state,
  };
};

const mapDispatch = {
  increment: counterAction.increment,
  decrement: counterAction.decrement,
  reset: counterAction.reset,
};

const connector = connect(mapState, mapDispatch); //HOC

export default connector(Counter);
