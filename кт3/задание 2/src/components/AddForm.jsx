import React from "react";
import { useTodo } from "../context/TodoContext";

function AddForm() {
  const { addTodo } = useTodo();
  const inputRef = React.useRef(null);

  const handleKeyUp = (event) => {
    if (event.key === "Enter" && inputRef.current) {
      const title = inputRef.current.value.trim();
      if (title) {
        addTodo(title);
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="input_elem">
      <input
        ref={inputRef}
        onKeyUp={handleKeyUp}
        placeholder="Добавить задачу"
      />
    </div>
  );
}

export default AddForm;
