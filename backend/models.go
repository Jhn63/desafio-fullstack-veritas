package main

import "errors"

type Task struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      string `json:"status"`
}

type TaskHandler struct {
	Todo       []Task `json:"todo"`
	InProgress []Task `json:"inprogress"`
	Done       []Task `json:"done"`
}

func (th *TaskHandler) FindTaskByID(id int) (int, *Task) {
	for i := 0; i < len(th.Todo); i++ {
		if th.Todo[i].Id == id {
			return i, &th.Todo[i]
		}
	}
	for i := 0; i < len(th.InProgress); i++ {
		if th.InProgress[i].Id == id {
			return i, &th.InProgress[i]
		}
	}
	for i := 0; i < len(th.Done); i++ {
		if th.Done[i].Id == id {
			return i, &th.Done[i]
		}
	}
	return -1, nil
}

func (th *TaskHandler) AddTask(task *Task) error {
	switch task.Status {
	case "todo":
		th.Todo = append(th.Todo, *task)
	case "inprogress":
		th.InProgress = append(th.InProgress, *task)
	case "done":
		th.Done = append(th.Done, *task)
	default:
		return errors.New("invalid status")
	}
	return nil
}

func (th *TaskHandler) DeleteTaskById(id int) error {
	i, task := th.FindTaskByID(id)

	switch task.Status {
	case "todo":
		th.Todo = append(th.Todo[:i], th.Todo[i+1:]...)
	case "inprogress":
		th.InProgress = append(th.InProgress[:i], th.InProgress[i+1:]...)
	case "done":
		th.Done = append(th.Done[:i], th.Done[i+1:]...)
	default:
		return errors.New("invalid status")
	}
	return nil
}
