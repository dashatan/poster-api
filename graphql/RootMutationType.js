const { GraphQLObjectType } = require("graphql")
const { addUser } = require("./Models/User/fields/addUser")
const { updateUser } = require("./Models/User/fields/updateUser")
const { addPost } = require("./Models/Post/fields/addPost")

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addUser,
    updateUser,
    addPost,
  }),
})

module.exports = RootMutationType
