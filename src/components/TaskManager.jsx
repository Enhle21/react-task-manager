import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  };

  const toggleTask = (id) =>
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const filteredTasks = tasks.filter(task => 
    filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 w-full"
          placeholder="Add a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map(f => (
          <Button
            key={f}
            variant={filter === f ? 'primary' : 'secondary'}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center border-b py-2">
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => toggleTask(task.id)}>Toggle</Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskManager;