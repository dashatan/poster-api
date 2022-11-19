const { rename } = require("fs")
const Post = require("..")
const User = require("../../User")

module.exports.moveImages = async (images) => {
  const newImages = []
  for (const img of images) {
    const name = img.split("/").pop()
    const oldPath = "public/tmp/" + name
    const newPath = "public/files/" + name
    await rename(oldPath, newPath, (err) => {
      if (err) return null
      else newImages.push(newPath)
    })
  }
  return newImages
}

module.exports.createPost = async (_, args) => {
  const user = await User.findById(args.userId)
  if (!user) throw new Error("user not found")
  try {
    const images = await this.moveImages(args.images)
    if (!images) throw new Error("something went wrong while processing images")
    const post = Post.create({ ...args, images })
    return post
  } catch (error) {
    throw new Error(error)
  }
}
