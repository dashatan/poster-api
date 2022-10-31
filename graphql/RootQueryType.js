const { GraphQLObjectType } = require("graphql");
const { user } = require("./models/User/fields/user");
const { users } = require("./models/User/fields/users");
const { categories } = require("./models/Category/fields/categories");
const { category } = require("./models/Category/fields/category");
const { posts } = require("./models/Post/fields/posts");
const { post } = require("./models/Post/fields/post");

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
});

module.exports = RootQueryType;
