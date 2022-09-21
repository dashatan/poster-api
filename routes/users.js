const express = require("express");
const addOneUser = require("../controllers/users/create");
const deleteUser = require("../controllers/users/delete");
const getAllUsers = require("../controllers/users/getAll");
const updateUser = require("../controllers/users/update");
const getUser = require("../middlewares/getUser");

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);

usersRouter.get("/:id", getUser, (req, res) => {
    res.json(res.user);
});

usersRouter.post("/", addOneUser);

usersRouter.patch("/:id", updateUser);

usersRouter.delete("/:id", getUser, deleteUser);

module.exports = usersRouter;
