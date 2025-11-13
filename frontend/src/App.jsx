import React, { useEffect, useState } from 'react';
import KanbanBoard from './KanbanBoard';
import TaskForm from './TaskForm';
import axios from 'axios';
import './App.css'

function App() {
  const [tasks, setTasks] = useState({ todo: [], inprogress: [], done: [] })

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await axios.get('http://localhost:8080/tasks');
        setTasks(response.data)
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    }

    fetchTasks();
  }, []);
  
  return (
   <>
   <h1>Quadro Kanban</h1>
   <div className='app-container'>
    <aside className='side-bar'>
      <TaskForm setTasks={setTasks}/>
    </aside>
    
    <main className='board-area'>
      <KanbanBoard tasks={tasks}/>
    </main>
    
   </div>
   </>
  )
}

export default App