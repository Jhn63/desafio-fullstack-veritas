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
   <TaskForm setTasks={setTasks}/>
   <KanbanBoard tasks={tasks}/>
   </>
  )
}

export default App