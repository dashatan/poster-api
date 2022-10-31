const { userArgs } = require("../userArgs");
const { UpdateUser } = require("../resolvers/update");
const { UserType } = require("../UserType");

module.exports.updateUser = {
    type: UserType,
    description: "updates a user",
    args: userArgs,
    resolve: UpdateUser,
};
