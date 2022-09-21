const express = require("express");
const addOneUser = require("../controllers/users/create");
const getAllUsers = require("../controllers/users/getAll");
const getOneUser = require("../controllers/users/getOne");

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);

usersRouter.get("/:id", getOneUser);

usersRouter.post("/", addOneUser);

module.exports = usersRouter;
