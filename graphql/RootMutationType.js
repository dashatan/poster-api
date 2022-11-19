const { GraphQLObjectType } = require("graphql")
const { addUser } = require("./Models/User/fields/addUser")
const { updateUser } = require("./Models/User/fields/updateUser")
const { newPost } = require("./Models/Post/fields/newPost")

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addUser,
    updateUser,
    newPost,
  }),
})

module.exports = RootMutationType
