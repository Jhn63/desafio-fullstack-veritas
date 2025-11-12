import React, { useState } from 'react';


function TaskForm() {
  return (
    <div class="task-form">
      <form>
        <h2>Criar Nova Tarefa</h2>
        
        <div>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
          />
        </div>

        <div>
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            rows="5"
          ></textarea>
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select name="status">
            <option value="todo"> A Fazer </option>
            <option value="in-progress"> Em Progresso </option>
            <option value="done"> Concluídas </option>
          </select>
        </div>

        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
}

export default TaskForm;	