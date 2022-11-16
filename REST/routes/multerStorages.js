const multer = require("multer")

function storage(dest) {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, dest)
    },
    filename: (req, file, cb) => {
      const nameArr = file.originalname.split(".")
      const extension = "." + nameArr.pop()
      const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9)
      const name = uniqueSuffix + extension
      cb(null, name)
    },
  })
}

module.exports = { storage }
