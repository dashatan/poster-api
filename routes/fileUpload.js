const express = require("express");

const multer = require("multer");
const imageUpload = require("./resolvers/imageUpload");
const tmpImageUpload = require("./resolvers/tmpImageUpload");

const tmpStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/tmp");
  },
  filename: (req, file, cb) => {
    const nameArr = file.originalname.split(".")
    const extension = "." + nameArr.pop();
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    const userId = req.body.userId;
    const sep = "_"
    const name = userId + sep + uniqueSuffix + extension;
    cb(null, name);
  },
});

const tmpUpload = multer({ storage: tmpStorage,dest: "tmp/" });

const fileUploadRouter = express.Router();

fileUploadRouter.post("/tmp", tmpUpload.single("image"), tmpImageUpload);

module.exports = fileUploadRouter;
