const express = require("express")
const { login } = require("../controllers/auth/login")
const { signup } = require("../controllers/auth/signup")

const authRouter = express.Router()

authRouter.post("/login", login)
authRouter.post("/signup", signup)
// authRouter.post("/reset", reset)

module.exports = authRouter
