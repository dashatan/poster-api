const Post = require("..");

module.exports.createPost = async (_parent, args) => {
    const {
        title, description, categoryId, images, attributes, userId, cityId,
    } = args;
    const post = await Post.create({
        title,
        description,
        categoryId,
        userId,
        cityId,
        images,
        attributes,
    });
    return post;
};
