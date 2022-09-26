const { GraphQLObjectType } = require("graphql");
const { user } = require("./models/users/fields/user");
const { users } = require("./models/users/fields/users");

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        users,
        user,
    }),
});

module.exports = RootQueryType;
