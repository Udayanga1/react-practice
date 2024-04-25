import asyncHandler from "express-async-handler"
// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
	// no need to wrap try-catch since asyncHandler
	res.status(401)
	throw new Error("Something went wrong")
	res.status(200).json({ message: "Auth User" })
})

export { authUser }
