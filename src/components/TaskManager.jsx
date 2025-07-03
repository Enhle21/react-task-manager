import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { text, completed: false }]);
      setText('');
    }
  };

  const handleToggle = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'completed' ? task.completed :
    filter === 'active' ? !task.completed :
    true
  );

  return (
    <div>
      <h1>Task Manager</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a task" />
      <Button onClick={handleAddTask} label="Add" />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul>
        {filteredTasks.map((task, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(i)}
            />
            {task.text}
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;