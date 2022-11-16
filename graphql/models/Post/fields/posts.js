const { GraphQLList } = require("graphql")
const { PostType } = require("../PostType")
const { GetAllPosts } = require("../resolvers/getAll")

module.exports.posts = {
  type: new GraphQLList(PostType),
  resolve: GetAllPosts,
}
