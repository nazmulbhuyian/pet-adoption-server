const express = require('express');
const router = express.Router();
const usersLogControllers=require('../controllers/usersLogControllers');

router.route('/').post(usersLogControllers.postLogUser)


module.exports=router;