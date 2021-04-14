const { gql } = require('apollo-server');
const axios = require('axios');
const Redis = require('ioredis');
const redis = new Redis();
const url = 'http://localhost:4001/destination';

module.exports = {
  typeDefs: gql`
    type Destination {
      _id: String
      title: String
      price: Int
    }

    type DestinationResult {
      destination: Destination
      error: String
    }

    input AddDestinationInput {
      title: String
      price: Int
    }

    input EditDestinationInput {
      id: ID
      title: String
      price: Int
    }

    extend type Query {
      destinations: [Destination]
      getDestination(id: ID): Destination
    }

    extend type Mutation {
      addDestination(destination: AddDestinationInput): Destination
      updateDestination(destination: EditDestinationInput): Destination
      deleteDestination(id: ID): Destination
    }
  `,
  resolvers: {
    Query: {
      async destinations() {
        try {
          const destinationsData = await redis.get('destinations:data');
          if (destinationsData) {
            return JSON.parse(destinationsData);
          } else {
            const { data } = await axios.get(url);
            redis.set('destinations:data', JSON.stringify(data));
            return data;
          }
        } catch(err) {
          console.log(err);
        }
      },
      async getDestination(_, args) {
        try {
          const { data } = await axios.get(`${url}/${args.id}`);
          return data;
        } catch(err) {
          console.log(err);
        }
      }
    },
    Mutation: {
      async addDestination(parent, args, context, info) {
        try {
          const { data } = await axios.post(url, args.destination);
          redis.del('destinations:data');
          return data;
        } catch(err) {
          console.log(err);
        }
      },
      async updateDestination(parent, args, context, info) {
        try {
          await axios.put(`${url}/${args.destination.id}`, args.destination);
          redis.del('destinations:data');
          const { data } = await axios.get(`${url}/${args.destination.id}`);
          return data;
        } catch(err) {
          console.log(err);
        }
      },
      async deleteDestination(parent, args, context, info) {
        try {
          const { data } = await axios.get(`${url}/${args.id}`);
          await axios.delete(`${url}/${args.id}`);
          redis.del('destinations:data');
          return data;
        } catch(err) {
          console.log(err);
        }
      }
    }
  }
}