require("dotenv").config({ path: "./config.env" });

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const graphql = require("./graphql");

const app = express();

const port = process.env.EXPRESS_PORT || 5000;
const mongoURI = process.env.MONGODB_URI;

app.listen(port, () => console.log(`server is listening to port ${port}`));

mongoose.connect(mongoURI)
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.log({ message: "something went wrong", error: err }));

app.use(bodyParser.json());
app.use(cors());

app.use("/", graphql);
