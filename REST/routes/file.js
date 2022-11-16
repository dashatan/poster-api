const express = require("express")

const multer = require("multer")
const { storage } = require("./multerStorages")
const fileUpload = require("../controllers/fileUpload")
const removeFile = require("../controllers/removeFile")
const tmpFileUpload = require("../controllers/tmpFileUpload")

const fileRouter = express.Router()

const tmpUpload = multer({ storage: storage("public/temp") })
const upload = multer({ storage: storage("public/files") })

fileRouter.post("/upload/tmp", tmpUpload.single("image"), tmpFileUpload)
fileRouter.post("/upload", upload.single("image"), fileUpload)
fileRouter.post("/remove", removeFile)

module.exports = fileRouter
