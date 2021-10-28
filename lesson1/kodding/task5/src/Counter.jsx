import React, { useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);
  function increment() {
    setCounter(count + 1);
  }

  function decrement() {
    setCounter(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Counter;
