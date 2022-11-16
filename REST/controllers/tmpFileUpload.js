const { unlink } = require("fs")

const tmpFileUpload = async (req, res) => {
  try {
    const file = req.file
    const expire = req.body.expire
    if (expire) setTimeout(unlink("public/tmp/" + file.filename), expire)
    const path = "/tmp/" + file.fileName
    res.json(path)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = tmpFileUpload
