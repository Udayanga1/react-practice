const app = require("./app")
const port = 5001
const host = "localhost"

const server = app.listen(port, host, () => {
	console.log("Server running on port 5001")
})
