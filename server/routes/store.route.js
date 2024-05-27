const storeController = require('../controllers/store.controller');
const router = require('express').Router();

router.route('/add').post(storeController.addStore);
router.route('/').get(storeController.getStores);

module.exports = router;