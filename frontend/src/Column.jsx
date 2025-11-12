

function Column({name, tasks}) {
  return (
		<div class="column">
			<h3>{name}</h3>
			<div>

				{tasks.map((task) => {
          return (
            <div>
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