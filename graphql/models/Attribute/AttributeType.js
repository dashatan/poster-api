const { GraphQLString, GraphQLObjectType, GraphQLList } = require("graphql")

const PropsType = new GraphQLObjectType({
  name: "props",
  description: "represents an prop",
  fields: () => ({
    name: { type: GraphQLString },
    value: { type: GraphQLString },
  }),
})

module.exports.AttributeType = new GraphQLObjectType({
  name: "attribute",
  description: "represents an attribute",
  fields: () => ({
    label: { type: GraphQLString },
    formFieldType: { type: GraphQLString },
    filterFieldType: { type: GraphQLString },
    props: { type: new GraphQLList(PropsType) },
    options: { type: new GraphQLList(GraphQLString) },
  }),
})
