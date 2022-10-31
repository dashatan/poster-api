const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

module.exports.CityType = new GraphQLObjectType({
    name: "city",
    description: "represents a city",
    fields: () => {
        const obj = {
            _id: { type: GraphQLString },
            name: { type: GraphQLString },
            slug: { type: GraphQLString },
            provinceId: { type: GraphQLInt },
            latitude: { type: GraphQLString },
            longitude: { type: GraphQLString },
        };
        return obj;
    },
});
