import React, { useState } from 'react';


function TaskForm({setTasks}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'todo'
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form subimitted: ", formData)
    
    setTasks((prev) => {
      return {
        ...prev,
        [formData.status]: [
          ...prev[formData.status],
          formData
        ]
      }
    })

    setFormData({
      title: '',
      description: '',
      status: 'todo'
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Criar Nova Tarefa</h2>
        
        <div>
          <label htmlFor="title" />
          <input
            type="text"
            name="title"
            placeholder='Título da Tarefa'
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="description" />
          <textarea
            name="description"
            rows="5"
            placeholder='Descreva sua tarefa aqui...'
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="status" />
          <select 
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="todo"> A Fazer </option>
            <option value="inprogress"> Em Progresso </option>
            <option value="done"> Concluídas </option>
          </select>
        </div>

        <button type="submit">Criar Tarefa</button>
      </form>
    </>
  );
}

export default TaskForm;	