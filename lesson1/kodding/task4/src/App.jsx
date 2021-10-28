import React, { useState } from "react";

const App = () => {
  const [likes, setlilkes] = useState(5);

  function increment() {
    setlilkes(likes + 1);
  }

  function decrement() {
    setlilkes(likes - 1);

    return () => {
      <>
        <div>
          <h1>{likes}</h1>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
        </div>
      </>;
    };
  }
};
export default App;
