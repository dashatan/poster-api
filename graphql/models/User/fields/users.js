const { GraphQLList } = require("graphql")
const { GetAllUsers } = require("../resolvers/get_all")
const { UserType } = require("../UserType")

module.exports.users = {
  type: new GraphQLList(UserType),
  description: "list all users",
  resolve: GetAllUsers,
}
