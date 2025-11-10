package main

import (
	"fmt"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

type TaskHandler struct {
	Tasks map[int]Task
}

func (th *TaskHandler) GetTask(c *fiber.Ctx) error {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {

		msg := fmt.Sprintf("%d is not a number", id)
		return c.Status(400).JSON(fiber.Map{"error": msg})
	}

	task := th.Tasks[id]
	if task == (Task{}) {
		return c.Status(404).JSON(fiber.Map{"error": "task not found"})
	}
	return c.Status(200).JSON(task)
}

func (th *TaskHandler) CreateTask(c *fiber.Ctx) error {
	task := &Task{}

	if err := c.BodyParser(task); err != nil {
		return err //?
	}

	//adding task to memory
	th.Tasks[task.Id] = *task

	return c.Status(201).JSON(task) //optional?
}

func (th *TaskHandler) UpdateTask(c *fiber.Ctx) error {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {

		msg := fmt.Sprintf("%d is not a number", id)
		return c.Status(400).JSON(fiber.Map{"error": msg})
	}

	if t := th.Tasks[id]; t == (Task{}) {
		return c.Status(404).JSON(fiber.Map{"error": "task not found"})
	}

	updatedTask := &Task{}
	if err := c.BodyParser(updatedTask); err != nil {
		return err //?
	}
	th.Tasks[id] = *updatedTask

	return c.Status(200).JSON(updatedTask) //optional?
}

func (th *TaskHandler) DeleteTask(c *fiber.Ctx) error {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {

		msg := fmt.Sprintf("%d is not a number", id)
		return c.Status(400).JSON(fiber.Map{"error": msg})
	}

	delete(th.Tasks, id)
	return c.Status(200).JSON("")
}
