const { GraphQLString } = require("graphql");
const { GetOneUser } = require("../resolvers/get_one");
const { UserType } = require("../types/UserType");

module.exports.user = {
    type: UserType,
    description: "Get One User",
    args: {
        _id: { type: GraphQLString },
    },
    resolve: GetOneUser,
};
