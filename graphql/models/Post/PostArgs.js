const { GraphQLString, GraphQLList } = require("graphql")
const { keyValueInputObjectType } = require("../../types/keyValueObjectType")

module.exports.postArgs = {
  title: { type: GraphQLString },
  description: { type: GraphQLString },
  categoryId: { type: GraphQLString },
  cityId: { type: GraphQLString },
  userId: { type: GraphQLString },
  attributes: { type: new GraphQLList(keyValueInputObjectType) },
  images: { type: new GraphQLList(GraphQLString) },
}
