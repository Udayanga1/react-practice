const express = require("express")
const app = express()
const cors = require("cors")
const port = 5001
const host = "localhost"
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())

const uri =
	"mongodb+srv://udayanga:Password@mernpractice.b8f3foq.mongodb.net/?retryWrites=true&w=majority&appName=MernPractice"

const connect = async () => {
	try {
		await mongoose.connect(uri)
		console.log("Connected to MongoDB")
	} catch (error) {
		console.log("MongoDB Error: ", error)
	}
}

connect()

const server = app.listen(port, host, () => {
	console.log("Server running on port 5001")
})
