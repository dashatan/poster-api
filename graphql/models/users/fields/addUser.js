const { userArgs } = require("../args/userArgs");
const { AddUser } = require("../resolvers/create");
const { UserType } = require("../types/UserType");

module.exports.addUser = {
    type: UserType,
    description: "adds a user",
    args: userArgs,
    resolve: AddUser,
};
