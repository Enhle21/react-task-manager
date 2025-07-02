<<<<<<< HEAD
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
=======
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';
import Card from './Card';

function TaskManager() {
    const [tasks, setTasks] = useLocalStorage('task', []);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('All');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false}]);
            setNewTask('');
        }
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'Active') return !task.completed;
        if (filter === 'Completed') return task.completed;
        return true;
    });

    return (
        <div>
            <h1 className="text-2xl mb-4">Task Manager</h1>
            <div className="flex space-x-2 mb-4">
                <Input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="border p-2 flex-grow"
                placeholder="New task..."
                />
                <Button onClick={addTask}>Add</Button>
            </div>
            <div className="space-x-2 mb-4">
                <Button variant={filter === 'All' ? 'primary' : 'secondary'} onClick={() => setFilter('All')}>All</Button>
                <Button variant={filter === 'Active' ? 'primary' : 'secondary'} onClick={() => setFilter('Active')}>Active</Button>
                <Button variant={filter === 'Completed' ? 'primary': 'secondary'} onClick={() => setFilter('Completed')}>Completed</Button>
           </div>
           {filteredTasks.map(task => (
            <Card key={task.id}>
                <div className="flex justify-between items-center">
                    <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
                    <div className="space-x-2">
                        <Button variant="secondary" onClick={() => toggleTask(task.id)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </Button>
                        <Button variant="secondary" onClick={() => deleteTask(task.id)}>Delete</Button>
                    </div>
                </div>
            </Card>
           ))}     
        </div>
    );
>>>>>>> 747a97dc626f52151b859af3011a0cbbbf7d0fb0
}
export default TaskManager;