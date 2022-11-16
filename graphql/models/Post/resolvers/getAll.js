const Post = require("..")

module.exports.GetAllPosts = async () => {
  const posts = await Post.find()
  return posts
}
