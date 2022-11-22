const { rename } = require("fs")
const Post = require("../../../Schemas/Post")

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
