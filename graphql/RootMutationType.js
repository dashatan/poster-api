const { GraphQLObjectType } = require("graphql");
const { addUser } = require("./models/User/fields/addUser");
const { updateUser } = require("./models/User/fields/updateUser");
const { addPost } = require("./models/Post/fields/addPost");

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root Mutation",
    fields: () => ({
        addUser,
        updateUser,
        addPost,
    }),
});

module.exports = RootMutationType;
