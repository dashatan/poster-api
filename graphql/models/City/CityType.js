const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql")

const beautifyWord = (string) => {
  return string
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

module.exports.CityType = new GraphQLObjectType({
  name: "city",
  description: "represents a city",
  fields: () => {
    const obj = {
      id: { type: GraphQLString },
      title: {
        type: GraphQLString,
        resolve: (city) => {
          return beautifyWord(city.slug)
        },
      },
      slug: {
        type: GraphQLString,
        resolve: (city) => {
          return city.slug.toLowerCase().replace(/ /g, "-")
        },
      },
      parentSlug: {
        type: GraphQLString,
        resolve: () => "este-azerbaijan",
      },
      icon: {
        type: GraphQLString,
        resolve: () => "",
      },
      province_id: { type: GraphQLInt },
      latitude: { type: GraphQLString },
      longitude: { type: GraphQLString },
    }
    return obj
  },
})
