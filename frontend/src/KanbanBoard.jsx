import Column from './Column'

function KanbanBoard() {
  return (
    <div class="kanban-board">
      <h2>Quadro</h2>
      <Column name="A Fazer"/>
      <Column name="Em Progresso"/>
      <Column name="Concluídas"/>
    </div>
  );
}

export default KanbanBoard;