import React from "react";
import ToDo from "./ToDo.jsx";
import Context from "./Context.js";

const App = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "купить хлеб" },
    { id: 2, completed: false, title: "купить молоко" },
    { id: 3, completed: false, title: "купить масло" },
  ]);
  function togletodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id == id));
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div>
        <h1>Tutorial</h1>
        {todos.length ? (
          <ToDo todos={todos} onTogle={togletodo} />
        ) : (
          <p>No todos</p>
        )}
      </div>
    </Context.Provider>
  );
};

export default App;
