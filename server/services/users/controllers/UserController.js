const User = require('../models/User');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class UserController {
  static async register(req, res) {
    try {
      const user = await User.register(req.body);
      res.json(user.ops[0]);
    } catch(err) {
      console.log(err);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findingOne(username);
      if (user) {
        const comparedPassword = comparePassword(password, user.password);
        if (comparedPassword) {
          const token = generateToken({
            full_name: user.full_name,
            email: user.email,
            username: user.username
          })
          res.json({
            full_name: user.full_name,
            email: user.email,
            username: user.username,
            token
          });
        } else {
          res.json({ message: 'Username or password is incorrect!' });
        }
      } else {
        res.json({ message: 'Username or password is incorrect!' });
      }
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = UserController;