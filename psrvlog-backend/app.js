const express = require("express")
const app = express()
const cors = require("cors")
const controller = require("./controller")

app.use(cors()) // Attach CORS middleware

app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies (middleware)

app.use(express.json()) // Parse JSON bodies (middleware)

app.get("/users", (req, res) => {
	controller.getUsers((req, res, next) => {
		res.send()
	})
})

app.post("/createuser", (req, res) => {
	controller.addUser(req.body, (callback) => {
		res.send()
	})
})

app.post("/updateuser", (req, res) => {
	//can use put method instead of post
	controller.updateUser(req.body, (callback) => {
		res.send(callback)
	})
})

app.post("/deleteuser", (req, res) => {
	//can use delete method instead of post
	controller.deleteUser(req.body, (callback) => {
		res.send(callback)
	})
})

module.exports = app
