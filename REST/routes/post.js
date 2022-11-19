const express = require("express")
const { createPost } = require("../controllers/post/create")

const postRouter = express.Router()

postRouter.post("/", createPost)
postRouter.patch("/", () => {})
postRouter.delete("/", () => {})

module.exports = postRouter
