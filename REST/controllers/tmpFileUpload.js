const { unlink } = require("fs")

const tmpFileUpload = async (req, res) => {
  try {
    const file = req.file
    const expire = parseInt(req.body.expire)
    if (expire) {
      setTimeout(() => {
        unlink("public/tmp/" + file.filename, (err) => {
          if (err) {
            return res.status(500).json(err)
          }
        })
      }, expire)
    }
    const path = "tmp/" + file.filename
    res.json(path)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = tmpFileUpload
