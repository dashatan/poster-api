const fileUpload = async (req, res) => {
  try {
    const file = req.file
    const path = "/files" + file.fileName
    res.json(path)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = fileUpload
