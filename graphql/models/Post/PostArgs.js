const { GraphQLString, GraphQLInt, GraphQLList } = require("graphql");
const { keyValueInputObjectType } = require("../../types/keyValueObjectType");

module.exports.postArgs = {
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLInt },
    categoryId: { type: GraphQLString },
    cityId: { type: GraphQLString },
    userId: { type: GraphQLString },
    attributes: { type: new GraphQLList(keyValueInputObjectType) },
    images: { type: new GraphQLList(GraphQLString) },
};
