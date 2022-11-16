const { graphqlHTTP } = require("express-graphql")
const { GraphQLSchema } = require("graphql")
const RootQueryType = require("./RootQueryType")
const RootMutationType = require("./RootMutationType")

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
})

const graphql = graphqlHTTP({
  schema,
  graphiql: true,
})

module.exports = graphql
