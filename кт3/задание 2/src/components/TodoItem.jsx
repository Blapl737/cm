import React from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ id, title, completed }) => {
  const { deleteTodoByid, changeTodos } = useTodo();

  const handleDoubleClick = () => {
    deleteTodoByid(id);
  };

  const handleClick = () => {
    changeTodos(id);
  };

  return (
    <div
      className="todo_card"
      style={{ backgroundColor: completed ? "green" : "red" }}
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default TodoItem;