require("dotenv").config({ path: "./config.env" });

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");

const app = express();

const port = process.env.EXPRESS_PORT || 5000;

app.listen(port, () => {
    console.log(`server is listening to port ${port}`);
});

mongoose.connect(process.env.MONGODB_URI, () => {
    console.log("connected to mongo db");
});

app.use(bodyParser.json());

app.use("/users", usersRouter);
