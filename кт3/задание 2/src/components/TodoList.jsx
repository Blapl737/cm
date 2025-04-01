import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <ul>
      {todos.map(({ id, title, completed }) => (
        <li key={id}>
          <TodoItem id={id} title={title} completed={completed} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
