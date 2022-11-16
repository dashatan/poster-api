const { GraphQLString, GraphQLList } = require("graphql")
const { keyValueInputObjectType } = require("../../../Types/keyValueObjectType")
const { PostType } = require("../PostType")
const { createPost } = require("../resolvers/create")

module.exports.addPost = {
  type: PostType,
  description: "represents a post",
  args: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    categoryId: { type: GraphQLString },
    cityId: { type: GraphQLString },
    userId: { type: GraphQLString },
    attributes: { type: new GraphQLList(keyValueInputObjectType) },
    images: { type: new GraphQLList(GraphQLString) },
  },
  resolve: createPost,
}
