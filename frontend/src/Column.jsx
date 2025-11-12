import './Column.css'

function Column({name, tasks}) {
  return (
		<div className="column">
			<h3>{name}</h3>

			<div className="column-list">
				{tasks.map((task) => {
          return (
            <div className="task-card">
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
          )
        })}

			</div>
		</div>
	)
}

export default Column