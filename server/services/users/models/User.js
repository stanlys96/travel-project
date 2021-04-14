const { getDatabase } = require('../config/mongodb');
const { hashPassword } = require('../helpers/bcrypt');
const ObjectID = require('mongodb').ObjectID;

class User {
  static register(user) {
    user.password = hashPassword(user.password);
    return getDatabase().collection('users').insertOne(user);
  }

  static findingOne(username) {
    return getDatabase().collection('users').findOne({ username });
  }
} 

module.exports = User;