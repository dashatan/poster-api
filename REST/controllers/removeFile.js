const { unlink } = require("fs")

const removeFile = async (req, res) => {
  try {
    const path = req.body.filePath
    if (path) unlink("public/" + path)
    res.json("file has been removed")
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = removeFile
