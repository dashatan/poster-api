require("dotenv").config({ path: "./config.env" })

const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const redis = require("redis")
const cors = require("cors")
const graphql = require("./graphql")
const fileRouter = require("./REST/routes/file")
const postRouter = require("./REST/routes/post")
const { auth } = require("./REST/middlewares/auth")
const authRouter = require("./REST/routes/auth")

const app = express()

const expressPort = process.env.EXPRESS_PORT || 5000
const mongoURL = process.env.MONGODB_URL
const redisUrl = process.env.REDIS_URL

app.listen(expressPort, () => console.log(`server is listening to port ${expressPort}`))

mongoose
  .connect(mongoURL)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log({ message: "something went wrong", error: err }))

const redisClient = redis.createClient({ url: redisUrl })
redisClient
  .connect()
  .then(() => console.log("redis connected"))
  .catch((err) => console.log(err))

app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))

app.use("/gql", graphql)
app.use("/file", auth, fileRouter)
app.use("/post", auth, postRouter)
app.use("/auth", authRouter)

module.exports = { redisClient }
