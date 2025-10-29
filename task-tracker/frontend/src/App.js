import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Insights from './components/Insights';

function App() {
  return (
    <div style={{padding: '20px'}}>
      <h1>Task Tracker with Smart Insights</h1>
      <AddTask />
      <TaskList />
      <Insights />
    </div>
  );
}

export default App;
