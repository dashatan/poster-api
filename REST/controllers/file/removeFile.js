const { unlink, existsSync } = require("fs")

const removeFile = (path) => async (req, res) => {
  try {
    const name = req.params.name
    const filePath = path + name
    const isExist = existsSync(filePath)
    if (isExist) unlink(path + name, () => {})
    res.json({ success: true, message: "file has been removed" })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

module.exports = removeFile
