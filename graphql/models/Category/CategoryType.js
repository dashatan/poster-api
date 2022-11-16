const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql")
const { AttributeType } = require("../Attribute/AttributeType")

module.exports.CategoryType = new GraphQLObjectType({
  name: "category",
  description: "represents a category",
  fields: () => ({
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    parentSlug: { type: GraphQLString },
    icon: { type: GraphQLString },
    attributes: { type: new GraphQLList(AttributeType) },
  }),
})
