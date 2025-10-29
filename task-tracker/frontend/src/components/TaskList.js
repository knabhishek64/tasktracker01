import React, { useEffect, useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8000/tasks/');
    const data = await res.json();
    setTasks(data);
  };

  const toggleComplete = async (task) => {
    await fetch(`http://localhost:8000/tasks/${task.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...task, completed: !task.completed})
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {method: 'DELETE'});
    fetchTasks();
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(t => (
        <div key={t.id}>
          <span style={{textDecoration: t.completed ? 'line-through' : 'none'}}>
            {t.title} - {t.description}
          </span>
          <button onClick={() => toggleComplete(t)}>Toggle</button>
          <button onClick={() => deleteTask(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
