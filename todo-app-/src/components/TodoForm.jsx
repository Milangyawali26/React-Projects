import React, { useState } from "react";

const TodoForm = ({ task, setTask }) => {
  /// Form input
  const [inputValue, setInputValue] = useState({ id: "", value: "", isChecked: false });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.value.trim()) return; // Prevent empty input

    // Check if task already exists
    if (task.some((t) => t.value === inputValue.value)) {
      alert(`${inputValue.value} is already inserted`);
      setInputValue({ id: "", value: "", isChecked: false });
      return;
    }

    // Add task to list
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue({ id: "", value: "", isChecked: false }); // Reset input
  };

  // Clear all tasks
  const handleClearAll = () => {
    setTask([]);
  };

  return (
    <div>
      <section className="flex flex-row gap-5 justify-center items-center mb-4">
        <form onSubmit={handleFormSubmit} className="flex gap-3 ">
          <input
            className="border bg-white rounded-xl h-14 text-xl p-2"
            type="text"
            value={inputValue.value}
            autoComplete="off"
            placeholder="Enter task"
            onChange={(e) =>
              setInputValue({
                id: Date.now(), // Unique ID
                value: e.target.value,
                isChecked: false,
              })
            }
          />
          <button
            type="submit"
            className="h-14 px-4 border rounded-xl font-bold bg-green-500 hover:bg-green-700 text-white hover:cursor-pointer  transition-all duration-300"
          >
            Add Task
          </button>
        </form>
        <button
          onClick={handleClearAll}
          className="py-2 px-6 w-fit text-white text-2xl rounded-xl bg-red-500 hover:bg-red-700 hover:cursor-pointer duration-200"
        >
          Clear All
        </button>
      </section>
    </div>
  );
};

export default TodoForm;
