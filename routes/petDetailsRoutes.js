const express = require('express');
const router = express.Router();
const petsDetailControllers = require('../controllers/petDetailsControllers');

router.route('/').get(petsDetailControllers.getPetsDetails).post(petsDetailControllers.postPetsDetails).delete(petsDetailControllers.deletePetsDetails)
router.route('/:id').get(petsDetailControllers.getSinglePetsDetails).delete(petsDetailControllers.adminDeletePetsDetails)

module.exports = router;