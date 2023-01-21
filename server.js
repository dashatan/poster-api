require("dotenv").config({ path: "./.env" })

const express = require("express")
const https = require("https")
const http = require("http")
const fs = require("fs")
const mongoose = require("mongoose")
const redis = require("redis")
const cors = require("cors")
const graphql = require("./graphql")
const fileRouter = require("./REST/routes/file")
const postRouter = require("./REST/routes/post")
const { auth } = require("./REST/middlewares/auth")
const authRouter = require("./REST/routes/auth")
const userRouter = require("./REST/routes/user")

const app = express()

const httpPort = process.env.EXPRESS_PORT || 80
const httpsPort = process.env.HTTPS_PORT || 443
const mongoURL = process.env.MONGODB_URL
const redisUrl = process.env.REDIS_URL


mongoose
  .connect(mongoURL)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log({ message: "something went wrong", error: err }))

const redisClient = redis.createClient({ url: redisUrl })
redisClient
  .connect()
  .then(() => console.log("redis connected"))
  .catch((err) => console.log(err))

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/gql", graphql)
app.use("/auth", authRouter)
app.use("/file", auth, fileRouter)
app.use("/post", auth, postRouter)
app.use("/user", auth, userRouter)

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
}

http.createServer(app).listen(httpPort,function () {
  console.log("Server started at port " + httpPort)
})
https.createServer(options, app).listen(httpsPort,function () {
  console.log("Server started at port " + httpsPort)
})


module.exports = { redisClient }
