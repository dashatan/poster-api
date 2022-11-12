const express = require("express");

const multer = require("multer");
const imageUpload = require("./resolvers/imageUpload");
const tmpImageUpload = require("./resolvers/tmpImageUpload");

const upload = multer({ dest: "public/images" });

const fileUploadRouter = express.Router();


fileUploadRouter.post("/tmp", upload.array("tmp", 20), tmpImageUpload);

fileUploadRouter.post("/images", upload.array("image", 20), imageUpload);

module.exports = fileUploadRouter