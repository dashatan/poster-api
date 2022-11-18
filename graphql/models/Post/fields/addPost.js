const { postArgs } = require("../PostArgs")
const { PostType } = require("../PostType")
const { createPost } = require("../resolvers/create")

module.exports.addPost = {
  type: PostType,
  description: "creates a post",
  args: postArgs,
  resolve: createPost,
}
