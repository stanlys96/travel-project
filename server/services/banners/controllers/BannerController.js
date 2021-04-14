const Banner = require('../models/Banner');

class BannerController {
  static async createBanner(req, res) {
    try {
      const banner = await Banner.create(req.body);
      res.json(banner.ops[0]);
    } catch(err) {
      console.log(err);
    }
  }

  static async getAllBanners(req, res) {
    try {
      const banners = await Banner.getAllBanners();
      res.json(banners);
    } catch(err) {
      console.log(err);
    }
  }

  static async getOneBanner(req, res) {
    try {
      const id = req.params.id;
      const banner = await Banner.getOneBanner(id);
      res.json(banner);
    } catch(err) {
      console.log(err);
    }
  }

  static async updateOneBanner(req, res) {
    try {
      const id = req.params.id;
      const banner = await Banner.updateOneBanner(id, req.body);
      res.json(banner);
    } catch(err) {
      console.log(err);
    }
  }

  static async destroyOne(req, res) {
    try {
      const id = req.params.id;
      const banner = await Banner.destroy(id);
      res.json(banner);
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = BannerController;