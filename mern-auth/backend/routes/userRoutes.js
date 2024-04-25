import express from "express"
const router = express.Router()

import { authUser } from "../controlllers/userController.js"

router.post("/auth", authUser)

export default router
