const { rename } = require("fs")
const Post = require("../../../Schemas/Post")
const User = require("../../../Schemas/User")

const moveImages = (images) => {
  return new Promise((resolve, reject) => {
    const newImages = []
    for (const img of images) {
      const name = img.split("/").pop()
      const oldPath = "public/tmp/" + name
      const newPath = "public/files/" + name
      rename(oldPath, newPath, (err) => {
        if (err) reject(err)
      })
      newImages.push(process.env.BASE_URL + "/files/" + name)
    }
    return resolve(newImages)
  })
}

module.exports.createPost = async (req, res) => {
  const user = await User.findById(req.body.userId)
  if (!user) return res.status(404).json("user not found")
  const post = new Post({ ...req.body })
  post
    .validate()
    .then(() => {
      moveImages(req.body.images)
        .then(async (images) => {
          post.images = images
          await post.save()
          return res.json(post)
        })
        .catch((err) => {
          return res.status(400).json(err)
        })
    })
    .catch((err) => {
      return res.status(400).json(err)
    })
}
