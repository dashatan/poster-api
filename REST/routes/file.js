const express = require("express")

const multer = require("multer")
const storage = require("./storage")
const fileUpload = require("../controllers/file/fileUpload")
const removeFile = require("../controllers/file/removeFile")
const tmpFileUpload = require("../controllers/file/tmpFileUpload")

const fileRouter = express.Router()

const tmpUpload = multer({ storage: storage("public/tmp") })
const upload = multer({ storage: storage("public/files") })

fileRouter.post("/upload/tmp", tmpUpload.single("image"), tmpFileUpload)
fileRouter.post("/upload", upload.single("image"), fileUpload)
fileRouter.delete("/remove/tmp/:name", removeFile("public/tmp/"))
fileRouter.delete("/remove/:path", removeFile("public/files/"))

module.exports = fileRouter
