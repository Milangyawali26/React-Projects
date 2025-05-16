import React from "react";
import { MdCheck, MdDelete, MdUnarchive, MdUndo } from "react-icons/md";

const TodoList = ({ task, setTask }) => {
  // Toggle check/uncheck
  const handleToggleCheck = (id) => {
    setTask((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t, isChecked: !t.isChecked } : t
      )
    );
  };

  // Handle task deletion
  const handleDelete = (id) => {
    setTask((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  return (
    <div>
      <section className="flex justify-center items-center overflow-y-auto">
        <ul className="flex flex-col gap-3">
          {task.map((currTask) => (
            <li
              key={currTask.id}
              className={`border-1 rounded-xl p-2 flex flex-row gap-4 ${
                currTask.isChecked ? "bg-gray-300 line-through" : "bg-amber-100"
              }`}
            >
              <span
                className="text-2xl py-2 px-4 rounded-xl bg-amber-50 overflow-hidden whitespace-nowrap text-ellipsis w-100"
                title={currTask.value}
              >
                {currTask.value}
              </span>

              {/* Check/Uncheck Button */}
              <button
                onClick={() => handleToggleCheck(currTask.id)}
                className={`hover:cursor-pointer p-4 text-white text-4xl rounded-xl ${
                  currTask.isChecked ? "bg-amber-500" : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {
                     currTask.isChecked ? <MdUndo/>:<MdCheck /> 
                }
                
              </button>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(currTask.id)}
                className="hover:cursor-pointer p-4 text-white text-4xl rounded-xl bg-red-500 hover:bg-red-700 duration-200"
              >
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;




