const Post = require("../../graphql/models/Post");

const imageUpload = async (req, res) => {
    try {
        const files = req.files;
        const body = req.body;
        const { post_id } = req.body;
        const post = await Post.findById(post_id);
        res.json({files,body});
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = imageUpload