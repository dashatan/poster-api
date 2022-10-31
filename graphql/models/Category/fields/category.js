const { GraphQLString } = require("graphql");
const { CategoryType } = require("../CategoryType");
const { getOneCategory } = require("../resolvers/getOne");

module.exports.category = {
    type: CategoryType,
    args: { title: { type: GraphQLString } },
    resolve: getOneCategory,
};
