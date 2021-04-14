const Destination = require('../models/Destination');

class DestinationController {
  static async createDestination(req, res) {
    try {
      const destination = await Destination.create(req.body);
      res.json(destination.ops[0]);
    } catch(err) {
      console.log(err);
    }
  }

  static async getAllDestinations(req, res) {
    try {
      const destinations = await Destination.getAllDestinations();
      res.json(destinations);
    } catch(err) {
      console.log(err);
    }
  }

  static async getOneDestination(req, res) {
    try {
      const id  = req.params.id;
      const destination = await Destination.getOneDestination(id);
      res.json(destination);
    } catch(err) {
      console.log(err);
    }
  }

  static async updateOneDestination(req, res) {
    try {
      const id = req.params.id;
      const destination = await Destination.updateOneDestination(id, req.body);
      res.json(destination);
    } catch(err) {
      console.log(err);
    }
  }

  static async destroyOne(req, res) {
    try {
      const id = req.params.id;
      const destination = await Destination.destroy(id);
      res.json(destination);
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = DestinationController;