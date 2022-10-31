const { categories } = require("../../../seed/data/categories");

module.exports.getOneCategory = (_parent, args) => {
    const category = categories.find((x) => x.title === args.title);
    return category;
};
