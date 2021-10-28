import React, { useContext } from "react";
import Context from "./Context.js";

function TodoItem({ todo, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />

        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>+</button>
    </li>
  );
}

export default TodoItem;
