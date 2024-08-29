import { message } from "antd";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      message.error("Please enter a task");
      return;
    }

    editTodo(value, task.id);
    setValue("");
  };

  const inputRef = useRef("null");

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        ref={inputRef}
        className="todo-input"
        placeholder="Update Task"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

EditTodoForm.propTypes = {
  editTodo: PropTypes.func.isRequired,
  task: PropTypes.shape({
    task: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default EditTodoForm;
