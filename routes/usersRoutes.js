const express = require('express');
const router = express.Router();
const UsersControllers = require('../controllers/usersControllers');

router.route('/').post(UsersControllers.postUsers).get(UsersControllers.getAllUsers).put(UsersControllers.getAdminUsers).delete(UsersControllers.deleteUsers)

module.exports = router;