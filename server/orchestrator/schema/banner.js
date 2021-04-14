const { gql } = require('apollo-server');
const axios = require('axios');
const Redis = require('ioredis');
const redis = new Redis();
const url = 'http://localhost:4002/banner';

module.exports = {
  typeDefs: gql`
    type Banner {
      _id: String
      title: String
      image_url: String
    }

    type BannerResult {
      banner: Banner
      error: String
    }

    input AddBannerInput {
      title: String
      image_url: String
    }

    input EditBannerInput {
      id: ID
      title: String
      image_url: String
    }

    extend type Query {
      banners: [Banner]
      getBanner(id: ID): Banner
    }

    extend type Mutation {
      addBanner(banner: AddBannerInput): Banner
      updateBanner(banner: EditBannerInput): Banner
      deleteBanner(id: ID): Banner
    }
  `,
  resolvers: {
    Query: {
      async banners() {
        try {
          const bannersData = await redis.get('banners:data');
          if (bannersData) {
            return JSON.parse(bannersData);
          } else {
            const { data } = await axios.get(url);
            redis.set('banners:data', JSON.stringify(data));
            return data;
          }
        } catch(err) {
          console.log(err);
        }
      },
      async getBanner(_, args) {
        try {
          const { data } = await axios.get(`${url}/${args.id}`);
          return data;
        } catch(err) {
          console.log(err);
        }
      }
    },
    Mutation: {
      async addBanner(parent, args, context, info) {
        try {
          const { data } = await axios.post(url, args.banner);
          redis.del('banners:data');
          return data;
        } catch(err) {
          console.log(err);
        }
      },
      async updateBanner(parent, args, context, info) {
        try {
          await axios.put(`${url}/${args.banner.id}`, args.banner);
          redis.del('banners:data');
          const { data } = await axios.get(`${url}/${args.banner.id}`);
          return data;
        } catch(err) {
          console.log(err);
        }
      },
      async deleteBanner(parent, args, context, info) {
        try {
          const { data } = await axios.get(`${url}/${args.id}`);
          await axios.delete(`${url}/${args.id}`);
          redis.del('banners:data');
          return data;
        } catch(err) {
          console.log(err);
        }
      }
    }
  }
}