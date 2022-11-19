const { postArgs } = require("../PostArgs")
const { PostType } = require("../PostType")
const { createPost } = require("../resolvers/create")

module.exports.newPost = {
  type: PostType,
  description: "creates a post",
  args: postArgs,
  resolve: createPost,
}
