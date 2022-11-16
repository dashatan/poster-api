const { GraphQLString, GraphQLInputObjectType, GraphQLObjectType } = require("graphql")

module.exports.keyValueInputObjectType = new GraphQLInputObjectType({
  name: "keyValueInputObjectType",
  fields: {
    key: { type: GraphQLString },
    value: { type: GraphQLString },
  },
})
module.exports.keyValueObjectType = new GraphQLObjectType({
  name: "keyValueObjectType",
  fields: {
    key: { type: GraphQLString },
    value: { type: GraphQLString },
  },
})
