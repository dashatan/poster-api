const { userArgs } = require("../args/userArgs");
const { UpdateUser } = require("../resolvers/update");
const { UserType } = require("../types/UserType");

module.exports.updateUser = {
    type: UserType,
    description: "updates a user",
    args: userArgs,
    resolve: UpdateUser,
};
