const { rename } = require("fs")
const Post = require("..")

module.exports.createPost = async (_parent, args) => {
  const { title, description, categoryId, images, attributes, userId, cityId } = args

  try {
    for (const img of images) {
      const name = img.split("/").pop()
      const oldPath = "public/tmp/" + name
      const newPath = "public/files/" + name
      rename(oldPath, newPath, (err) => {
        if (err) return err.message
      })
    }
    const post = await Post.create({
      title,
      description,
      categoryId,
      userId,
      cityId,
      images,
      attributes,
    })
    return post
  } catch (error) {
    return error
  }
}
