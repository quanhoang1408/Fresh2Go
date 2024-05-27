const userController = require('../controllers/user.controller');

const router = require('express').Router();

// router.route('/add').post(userController.addUser);
router.route('/')
    .get(userController.getUsers);

module.exports = router;