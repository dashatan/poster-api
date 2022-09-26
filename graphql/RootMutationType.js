const { GraphQLObjectType } = require("graphql");
const { addUser } = require("./models/users/fields/addUser");
const { updateUser } = require("./models/users/fields/updateUser");

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root Mutation",
    fields: () => ({
        addUser,
        updateUser,
    }),
});

module.exports = RootMutationType;
