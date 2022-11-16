const { GraphQLString } = require("graphql")
const { PostType } = require("../PostType")
const { GetOnePost } = require("../resolvers/getOne")

module.exports.post = {
  type: PostType,
  args: { _id: { type: GraphQLString } },
  resolve: GetOnePost,
}
