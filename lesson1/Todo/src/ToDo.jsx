import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";

const ToDo = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([
    { _id: 0, name: "купить ноут", isChecked: true },
  ]);

  const onKeyPressNameHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTodos((prev) => [
        ...prev,
        { _id: todos.length, name, isChecked: false },
      ]);
      setName("");
    }
  };
  const toggleCheckedTodo = (idx) => {
    const newArray = [].concat(todos);
    newArray[idx].isChecked = !newArray[idx].isChecked;

    setTodos(newArray);
  };
  return (
    <>
      <h1>Todo приложение</h1>
      {todos &&
        todos.map((todo, idx) => (
          <ToDoItem
            id={todo.id}
            key={`_todo_${todo._id}`}
            idx={idx}
            name={todo.name}
            isChecked={todo.isChecked}
            toggleCheckedTodo={toggleCheckedTodo}
          />
        ))}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={onKeyPressNameHandler}
        placeholder="Название ..."
      />
    </>
  );
};

export default ToDo;
