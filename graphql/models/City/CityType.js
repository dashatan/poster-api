const { GraphQLObjectType, GraphQLString } = require("graphql")
const { cities } = require("../../StaticData/cities")

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
          return beautifyWord(city.slug.toLowerCase())
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
        resolve: (city) => {
          if (city.province_id) {
            return cities
              .find((x) => x.id === city.province_id)
              .slug.toLowerCase()
              .replace(/ /g, "-")
          } else {
            return ""
          }
        },
      },
      icon: {
        type: GraphQLString,
        resolve: () => "",
      },
      latitude: { type: GraphQLString },
      longitude: { type: GraphQLString },
    }
    return obj
  },
})
