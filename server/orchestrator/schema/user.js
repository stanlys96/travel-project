const { gql } = require('apollo-server');
const axios = require('axios');
const Redis = require('ioredis');
const redis = new Redis();
const url = 'http://localhost:4003/user';

module.exports = {
  typeDefs: gql`
    type User {
      full_name: String
      email: String
      username: String
      token: String
    }

    type UserResult {
      user: User
      error: String
    }

    input RegisterInput {
      full_name: String
      email: String
      username: String
      password: String
    }

    input LoginInput {
      username: String
      password: String
    }

    extend type Query {
      login(user: LoginInput): User
    }

    extend type Mutation {
      register(user: RegisterInput): User
    }
  `,
  resolvers: {
    Query: {
      async login(_, args) {
        try {
          const { data } = await axios.post(`${url}/login`, args.user);
          return data;
        } catch(err) {
          console.log(err);
        }
      }
    },
    Mutation: {
      async register(parent, args, context, info) {
        try {
          const { data } = await axios.post(`${url}/register`, args.user);
          return data;
        } catch(err) {
          console.log(err);
        }
      }
    }
  }
}