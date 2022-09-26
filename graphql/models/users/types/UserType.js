const {
    GraphQLObjectType, GraphQLString, GraphQLInt,
} = require("graphql");
const User = require("../../../../models/User");

module.exports.UserType = new GraphQLObjectType({
    name: "user",
    description: "represents a user",
    fields: () => {
        const obj = {
            _id: { type: GraphQLString },
            name: { type: GraphQLString },
            friendId: { type: GraphQLString },
            age: { type: GraphQLInt },
            friend: {
                type: this.UserType,
                resolve: (user) => {
                    const friend = User.findById(user.friendId);
                    return friend;
                },
            },
            email: { type: GraphQLString },
            createdAt: { type: GraphQLString },
            updatedAt: { type: GraphQLString },
        };
        return obj;
    },
});
