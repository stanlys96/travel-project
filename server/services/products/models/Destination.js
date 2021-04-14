const { getDatabase } = require('../config/mongodb');
const ObjectID = require('mongodb').ObjectID;

class Destination {
  static create(destination) {
    return getDatabase().collection('destinations').insertOne(destination);
  }

  static getAllDestinations() {
    return getDatabase().collection('destinations').find().toArray();
  }

  static getOneDestination(id) {
    return getDatabase().collection('destinations').findOne({ _id: ObjectID(id) });
  }

  static updateOneDestination(id, destination) {
    const { title, price } = destination;
    return getDatabase().collection('destinations').updateOne({
      _id: ObjectID(id)
    }, {
      $set: {
        title,
        price
      }
    })
  }

  static destroy(id) {
    return getDatabase().collection('destinations').deleteOne({ _id: ObjectID(id) });
  }
}

module.exports = Destination;