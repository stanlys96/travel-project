const { ApolloServer, gql } = require('apollo-server');
const DestinationSchema = require('./schema/destination');
const BannerSchema = require('./schema/banner');
const UserSchema = require('./schema/user');

const typeDefs = gql`
  type Query

  type Mutation
`;

const resolvers = {
  Query: {
  },
  Mutation: {
  }
}

const server = new ApolloServer({
  typeDefs: [typeDefs, DestinationSchema.typeDefs, BannerSchema.typeDefs, UserSchema.typeDefs],
  resolvers: [resolvers, DestinationSchema.resolvers, BannerSchema.resolvers, UserSchema.resolvers]
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
})