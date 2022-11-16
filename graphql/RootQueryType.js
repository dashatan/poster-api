const { GraphQLObjectType } = require("graphql")
const { user } = require("./Models/User/fields/user")
const { users } = require("./Models/User/fields/users")
const { categories } = require("./Models/Category/fields/categories")
const { category } = require("./Models/Category/fields/category")
const { posts } = require("./Models/Post/fields/posts")
const { post } = require("./Models/Post/fields/post")

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    users,
    user,
    categories,
    category,
    posts,
    post,
  }),
})

module.exports = RootQueryType
