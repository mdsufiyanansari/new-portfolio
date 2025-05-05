import React, { useState } from "react";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 h-screen bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-5">Task Manager</h1>

      <div className="mb-5">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTask}
          className="w-full mt-3 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-3 rounded-md ${
              task.completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <span
              className={`flex-1 ${task.completed ? "line-through" : ""}`}
            >
              {task.text}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleToggleComplete(task.id)}
                className="px-3 py-1 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
