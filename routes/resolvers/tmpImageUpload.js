const fs = require("fs");

const tmpImageUpload = async (req, res) => {
  try {
    const file = req.file;
    const expire = req.body.expire;

    if (expire) {
      setTimeout(fs.unlink("public/tmp/" + file.filename), expire);
    }

    res.json(file);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = tmpImageUpload;
