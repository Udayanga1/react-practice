const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
	id: Number,
	name: String,
})

const User = mongoose.model("User", userSchema) //assign userSchema to User model

module.exports = User
