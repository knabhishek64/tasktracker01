import React, { useEffect, useState } from 'react';

function Insights() {
  const [data, setData] = useState({total_tasks: 0, completed: 0, pending: 0});

  useEffect(() => {
    fetch('http://localhost:8000/tasks/insights')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h2>Insights</h2>
      <p>Total: {data.total_tasks}</p>
      <p>Completed: {data.completed}</p>
      <p>Pending: {data.pending}</p>
    </div>
  );
}

export default Insights;
