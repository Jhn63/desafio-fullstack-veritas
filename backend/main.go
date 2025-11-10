package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
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
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000, http://localhost:5173",
		AllowMethods: "GET, POST, PUT, DELETE",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Get("/tasks/:id", th.GetTask)
	app.Post("/post", th.CreateTask)
	app.Patch("/tasks/:id", th.UpdateTask)
	app.Delete("/tasks/:id", th.DeleteTask)

	if err := app.Listen(":" + portString); err != nil {
		log.Fatal("Couldn't intialize server")
	}
}
