const fileUpload = async (req, res) => {
  try {
    const file = req.file
    const path = process.env.BASE_URL + "/files" + file.fileName
    res.json(path)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = fileUpload