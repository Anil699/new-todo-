import React, { useState } from 'react';
import './index.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        text: inputValue,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleRemoveTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <button className='button' onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`todo-item ${task.completed ? 'completed' : ''}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
