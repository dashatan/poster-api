const { GraphQLList, GraphQLString, GraphQLInt } = require("graphql")
const { keyValueInputObjectType } = require("../../../types/keyValueObjectType")
const { PostType } = require("../PostType")
const { GetAllPosts } = require("../resolvers/getAll")

module.exports.posts = {
  type: new GraphQLList(PostType),
  args: {
    limit: { type: GraphQLInt },
    skip: { type: GraphQLInt },
    page: { type: GraphQLInt },
    sort: { type: GraphQLString },
    filters: { type: new GraphQLList(keyValueInputObjectType) },
  },
  resolve: GetAllPosts,
}
