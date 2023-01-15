const { GraphQLObjectType } = require("graphql")
const { addUser } = require("./models/User/fields/addUser")
const { updateUser } = require("./models/User/fields/updateUser")
const { newPost } = require("./models/Post/fields/newPost")

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
