const { getDatabase } = require('../config/mongodb');
const ObjectID = require('mongodb').ObjectID;

class Banner {
  static create(banner) {
    return getDatabase().collection('banners').insertOne(banner);
  }

  static getAllBanners() {
    return getDatabase().collection('banners').find().toArray();
  }

  static getOneBanner(id) {
    return getDatabase().collection('banners').findOne({ _id: ObjectID(id) });
  }

  static updateOneBanner(id, banner) {
    const { title, image_url } = banner;
    return getDatabase().collection('banners').updateOne({
      _id: ObjectID(id)
    }, {
      $set: {
        title,
        image_url
      }
    })
  }

  static destroy(id) {
    return getDatabase().collection('banners').deleteOne({ _id: ObjectID(id) });
  }
}

module.exports = Banner;