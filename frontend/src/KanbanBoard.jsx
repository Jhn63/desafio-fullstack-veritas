import Column from './Column'
import './KanbanBoard.css'

function KanbanBoard({tasks}) {
  return (
    <>
      <div className='kanban-columns'>
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
    </>
  );
}

export default KanbanBoard;