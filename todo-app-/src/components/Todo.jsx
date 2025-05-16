import React, {  } from "react";
import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import DateTime from "./DateTime";

const todoKey ="reactTodoList";

const Todo = () => {
  const [task, setTask] = useState(()=>{
    const rawTodos= localStorage.getItem(todoKey)
    if(!rawTodos) return [];
    return JSON.parse(rawTodos);
  });


  localStorage.setItem(todoKey,JSON.stringify(task));

  return (
    <section className=" h-screen flex flex-col items-center  ">
      <header className=" font-medium text-4xl flex justify-center w-full bg-amber-200  pt-4 pb-6">
       <span> Todo List</span>
      </header>
      <DateTime />

      <TodoForm task={task} setTask={setTask} />
      <TodoList task={task} setTask={setTask} />

    </section>
  );
};

export default Todo;
