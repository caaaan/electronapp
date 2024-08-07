import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { TodoForm } from '../forms/TodoForm';
import ITask from '../interfaces/ITask';

const Work: React.FC = () => {
  const ipcRenderer = (window as any).ipcRenderer;
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(false);

  const setup = async () => {
    setLoading(true);
    const resp = await axios.get('http://localhost:8000/api/tasks');
    setTasks(tasks.concat(resp.data));
    setLoading(false);
  };
  const handleDelete = (id: number) => {
    ipcRenderer.send('remove:task', id); // Send IPC event to remove task
  };
  useEffect(() => {
    setup();
    ipcRenderer.on('task:added', (event: any, data: any) => {
      setup();
    });
    ipcRenderer.on('task:removed', (event: any, data: any) => {
      setup();
    });
  }, []);

  return (
    <div className="p-4">
      {!loading ? (
        <ul className="space-y-4">
          {tasks &&
            tasks.map((task) => (
              <li key={task.id} className="flex items-center space-x-4 p-4 border rounded-lg shadow-md">
                <span className="flex-1">{task.description}</span>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn btn-error  btn-sm"
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
      <TodoForm />
    </div>
  );
};

export { Work };