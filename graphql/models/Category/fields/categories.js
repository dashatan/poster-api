const { GraphQLList } = require("graphql")
const { CategoryType } = require("../CategoryType")
const { getAllCategories } = require("../resolvers/getAll")

module.exports.categories = {
  type: new GraphQLList(CategoryType),
  resolve: getAllCategories,
}
