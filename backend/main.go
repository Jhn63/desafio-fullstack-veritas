package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	th := &TaskHandler{Tasks: make(map[int]Task)}

	godotenv.Load(".env")

	portString := os.Getenv("PORT")
	if portString == "" {
		log.Fatal("- Port not found")
	}

	app := fiber.New()
	app.Get("/tasks/:id", th.GetTask)
	app.Post("/post", th.CreateTask)
	app.Patch("/tasks/:id", th.UpdateTask)
	app.Delete("/tasks/:id", th.DeleteTask)

	if err := app.Listen(":" + portString); err != nil {
		log.Fatal("Couldn't intialize server")
	}
}
