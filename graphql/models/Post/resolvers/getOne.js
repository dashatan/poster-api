const Post = require("..")

module.exports.GetOnePost = async (_parent, args) => {
  const { _id } = args
  const post = await Post.findById(_id)
  return post
}
