const { GraphQLObjectType, GraphQLString } = require("graphql")

module.exports.UserType = new GraphQLObjectType({
  name: "user",
  description: "represents a user",
  fields: () => {
    const obj = {
      _id: { type: GraphQLString },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      avatar: { type: GraphQLString },
      createdAt: { type: GraphQLString },
      updatedAt: { type: GraphQLString },
    }
    return obj
  },
})
