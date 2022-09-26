const { GraphQLString, GraphQLInt } = require("graphql");

module.exports.userArgs = {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    friendId: { type: GraphQLString },
    email: { type: GraphQLString },
};
