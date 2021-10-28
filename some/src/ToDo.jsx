import React from "react";
import TodoItem from "./TodoItem.jsx";

function ToDo(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} onChange={props.onTogle} />;
      })}
    </ul>
  );
}

export default ToDo;
