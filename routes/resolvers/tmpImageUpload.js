const Post = require("../../graphql/models/Post");

const tmpImageUpload = async (req, res) => {
    try {
        const file = req.file;
        res.json(file);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = tmpImageUpload