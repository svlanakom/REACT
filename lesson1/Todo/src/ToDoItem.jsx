import React from "react";

const ToDoItem = ({ idx, name, isChecked, toggleCheckedTodo }) => {
  return (
    <div onClick={() => toggleCheckedTodo(idx)}>
      <input type="checkbox" checked={isChecked} readOnly />
      <span>{name}</span>
    </div>
  );
};
export default ToDoItem;
