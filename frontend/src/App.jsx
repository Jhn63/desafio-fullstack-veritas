import React, { useState } from 'react';
import KanbanBoard from './KanbanBoard';
import TaskForm from './TaskForm';
import './App.css'

function App() {
  
  return (
   <>
   <h1>Quadro Kanban</h1>
   <TaskForm />
   <KanbanBoard />
   </>
  )
}

export default App