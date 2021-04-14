const express = require('express');
const router = express.Router();
const BannerController = require('../controllers/BannerController');

router.get('/:id', BannerController.getOneBanner);
router.get('/', BannerController.getAllBanners);
router.post('/', BannerController.createBanner);
router.put('/:id', BannerController.updateOneBanner);
router.delete('/:id', BannerController.destroyOne);

module.exports = router;