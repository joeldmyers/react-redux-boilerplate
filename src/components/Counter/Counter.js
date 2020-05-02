import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter!</h1>
      <div id="app-counter">{count}</div>
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button type="button" onClick={() => setCount(count + 1)}>
        -
      </button>
    </div>
  );
};

export default Counter;
