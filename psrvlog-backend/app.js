const express = require("express")
const app = express()
const cors = require("cors")
const controller = require("./controller")

app.use(cors()) // Attach CORS middleware

app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies (middleware)

app.use(express.json()) // Parse JSON bodies (middleware)

app.get("/users", (req, res) => {
	var resObj = []
	controller.getUsers((users) => {
		res.send(users)
	})
})

app.get("/user", (req, res) => {
	const id = req.query.id
	controller.getUserById(id, (user) => {
		res.send(user)
	})
})

module.exports = app
