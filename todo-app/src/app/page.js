"use client"

import { useState } from "react";


export default function Home() {

  // tasks handling
const [task, setTask] = useState('')
const [tasks, setTasks] = useState([])

// adding the task
const addTask = (input) => {
  setTask(input)
}

// adding the task to the list
const addTaskToList = () => {
   if (task !== '') { 
    const taskItem = { 
      // when saving to a database change this to a ordered ID
        // Add a random id which is used to delete 
        id: Math.random(), 

        // Add a user value to list 
        value: task, 
    }; 

    // Update list 
    setTasks([...tasks, taskItem]); 

    // Reset state 
    setTask(''); 
} 
}

// Function to delete item from list using id to delete 
const deleteItem = (key) => { 
  const updatedList =  
        tasks.filter((item) => item.id !== key); 
  setTasks(updatedList); 
}; 

// editing the list
const editItem = (index) => { 
  const editedTodo = prompt('Edit the todo:'); 
  if (editedTodo !== null && editedTodo.trim() !== '') { 
      const updatedTodos = [...tasks]; 
      updatedTodos[index].value = editedTodo; 
      setTasks(updatedTodos); 
  } 
}; 



  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add item..." value={task} onChange={(item) => addTask(item.target.value)}/>
        <button onClick={addTaskToList}>Add</button>
      </div>
      {/* showing the list */}
      <div>
        {tasks.length > 0 ? (
          tasks.map((item, index) => (
            <div key={index}>
              <span>{item.value}</span>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
              <button onClick={() => editItem(index)}>Edit</button>
            </div>
          ))
        ):(
          <div>
            No items in the list
          </div>
        )}
      </div>
    </div>
  );

}