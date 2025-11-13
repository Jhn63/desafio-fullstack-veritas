import React, { useState } from 'react';
import axios from 'axios';


function TaskForm({setTasks}) {
  const [formData, setFormData] = useState({
    id: 0,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //setting unique id
    setFormData(prev => ({
      ...prev,
      id: Date.now()
    }));

    try {
      const response = await axios.post('http://localhost:8080/post', formData);

      setTasks((prev) => {
        return {
          ...prev,
          [formData.status]: [
            ...prev[formData.status],
            response.data
          ]
        }
      })

      setFormData({
        title: '',
        description: '',
        status: 'todo'
      })
    } catch (error) {
      console.error("Failed to create task:", error);
    }
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
            required
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