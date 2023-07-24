const express = require('express');
const router = express.Router();
const getMeControllers=require('../controllers/getMeControllers');


router.route('/').post(getMeControllers.getMeUser)


module.exports=router;