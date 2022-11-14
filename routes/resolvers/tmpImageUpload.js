const Post = require("../../graphql/models/Post");
const { redisClient } = require("../../server");

const tmpImageUpload = async (req, res) => {
  try {
    const file = req.file;
    const userId = req.body.userId;
    const key = userId + "_TempPostImages";
    redisClient
      .get(key)
      .then((val) => {
        console.log(val);
      })
      .catch(() => {
        console.log(file);
        redisClient.set(key,[file.filename])
      });

    res.json(file);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = tmpImageUpload;
