import React from "react";

import Todo from "./Todo";

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Выучить реакт" />
      <Todo text="Выучить вью" />
      <Todo text="Выучить Ангуляр" />
    </div>
  );
};

export default App;
