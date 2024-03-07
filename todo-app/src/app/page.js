"use client"
import todoForm from "./todoApp/todoForm";
import todoList from "./todoApp/todoList";

import { useState } from "react";

export default function Home() {
  // Getting the list of all the tasks and saving them
  const [tasks, setTasks] = useState([])
    
  const addTodo = (text) => {
    const newTodo = {
      id: Math.random().toString(),
      text: text,
    };
    setTasks([...todos, newTodo]);
  };


  return (
    <div>
      <h1>Todo List</h1>
      <todoForm addTodo={addTodo} />
      <todoList todos={tasks} />
    </div>
  );

}