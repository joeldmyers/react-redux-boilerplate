import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCounterAmount } from "../../actions/counterAction";

export default Counter = () => {
  const count = useSelector((state) => state.counterCount);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter!</h1>
      <div id="app-counter">{count}</div>
      <button type="button" onClick={() => dispatch(updateCounterAmount(1))}>
        -
      </button>
      <button type="button" onClick={() => dispatch(updateCounterAmount(-1))}>
        -
      </button>
    </div>
  );
};
