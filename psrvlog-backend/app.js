const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors()) // Attach CORS middleware

app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies (middleware)

app.use(express.json()) // Parse JSON bodies (middleware)

module.exports = app // now this is an Express app
