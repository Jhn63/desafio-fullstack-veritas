import React, { useState } from 'react';
import KanbanBoard from './KanbanBoard';
import TaskForm from './TaskForm';
import './App.css'

function App() {

  const [tasks, setTasks] = useState({
    todo: [
      
    ],
    inprogress: [
      
    ],
    done: [
      
    ],
  })
  
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