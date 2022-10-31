const { userArgs } = require("../userArgs");
const { AddUser } = require("../resolvers/create");
const { UserType } = require("../UserType");

module.exports.addUser = {
    type: UserType,
    description: "adds a user",
    args: userArgs,
    resolve: AddUser,
};
