package main

import (
	"fmt"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func (th *TaskHandler) GetTask(c *fiber.Ctx) error {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {

		msg := fmt.Sprintf("%d is not a number", id)
		return c.Status(400).JSON(fiber.Map{"error": msg})
	}

	_, task := th.FindTaskByID(id)
	if task == nil {
		return c.Status(404).JSON(fiber.Map{"error": "task not found"})
	}
	return c.Status(200).JSON(task)
}

func (th *TaskHandler) GetAllTask(c *fiber.Ctx) error {
	return c.Status(200).JSON(th)
}

func (th *TaskHandler) CreateTask(c *fiber.Ctx) error {
	task := &Task{}

	if err := c.BodyParser(task); err != nil {
		return err
	}

	if err := th.AddTask(task); err != nil {
		msg := fmt.Sprint(err.Error())
		return c.Status(400).JSON(fiber.Map{"error": msg})
	}
	return c.Status(201).JSON(task)
}

func (th *TaskHandler) UpdateTask(c *fiber.Ctx) error {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		msg := fmt.Sprintf("%d is not a number", id)
		return c.Status(400).JSON(fiber.Map{"error": msg})
	}

	task := &Task{}
	if err := c.BodyParser(task); err != nil {
		return err
	}

	if err := th.DeleteTaskById(id); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "couldn't update task"})
	}
	if err := th.AddTask(task); err != nil {
		msg := fmt.Sprint(err.Error() + "data may be lost")
		return c.Status(400).JSON(fiber.Map{"error": msg})
	}

	return c.Status(200).JSON(task)
}

func (th *TaskHandler) DeleteTask(c *fiber.Ctx) error {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {

		msg := fmt.Sprintf("%d is not a number", id)
		return c.Status(400).JSON(fiber.Map{"error": msg})
	}
	if err := th.DeleteTaskById(id); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "couldn't delete task"})
	}
	return c.Status(200).JSON("")
}
