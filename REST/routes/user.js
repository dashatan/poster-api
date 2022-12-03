const express = require("express")
const { userDelete } = require("../controllers/user/delete")
const { userUpdate } = require("../controllers/user/update")

const userRouter = express.Router()

userRouter.patch("/", userUpdate)
userRouter.delete("/", userDelete)

module.exports = userRouter
