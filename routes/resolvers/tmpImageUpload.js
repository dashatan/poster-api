const Post = require("../../graphql/models/Post");

const tmpImageUpload = async (req, res) => {
    try {
        const files = req.files;
        const { post_id } = req.body;
        const post = await Post.findById(post_id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = tmpImageUpload