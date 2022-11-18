const { GraphQLList, GraphQLInt } = require("graphql")
const { CityType } = require("../CityType")
const { getAllCities } = require("../resolvers/getAll")

module.exports.cities = {
  type: new GraphQLList(CityType),
  args: { provinceId: { type: GraphQLInt } },
  resolve: getAllCities,
}
