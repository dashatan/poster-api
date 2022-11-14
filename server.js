require("dotenv").config({ path: "./config.env" });

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const redis = require("redis");
const cors = require("cors");
const graphql = require("./graphql");
const fileUploadRouter = require("./routes/fileUpload");

const app = express();

const port = process.env.EXPRESS_PORT || 5000;
const mongoURI = process.env.MONGODB_URI;
const redisHost = process.env.REDIS_HOST || "redis";
const redisPort = process.env.REDIS_PORT || 6379;

app.listen(port, () => console.log(`server is listening to port ${port}`));

mongoose
  .connect(mongoURI)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log({ message: "something went wrong", error: err }));

const redisClient = redis.createClient({ url: `redis://${redisHost}:${redisPort}` });
redisClient
  .connect()
  .then(() => console.log("redis connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public"));
app.use("/gql", graphql);
app.use("/upload", fileUploadRouter);

module.exports = { redisClient };
