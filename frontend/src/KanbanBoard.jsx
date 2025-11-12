import Column from './Column'

function KanbanBoard({tasks}) {
  return (
    <div class="kanban-board">
      <h2>Quadro</h2>
      
      <Column 
        name="A Fazer"
        tasks={tasks.todo}
      />

      <Column 
        name="Em Progresso"
        tasks={tasks.inprogress}
      />

      <Column 
        name="Concluídas"
        tasks={tasks.done}
      />

    </div>
  );
}

export default KanbanBoard;