const express = require('express');
const router = express.Router();
const petsBookingsControllers = require('../controllers/bookingsControllers');

router.route('/').post(petsBookingsControllers.postPetBookings)
router.route('/:email').get(petsBookingsControllers.getSinglePetBookings).delete(petsBookingsControllers.deleteSinglePetBookings)
router.route('/myAdd/:email').get(petsBookingsControllers.getMyAddPets)
router.route('/userBookMyPet/:email').get(petsBookingsControllers.getUserBookMyPetPetBookings).delete(petsBookingsControllers.deleteBookMyPetBookings).patch(petsBookingsControllers.updateStatusMyPetBookings)

module.exports = router;