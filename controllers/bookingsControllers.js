const { postPetBookingsService, getSinglePetBookingsService, getMyAddPetService, deleteSinglePetBookingsService, getUserMyPetBookingsService, deleteBookMyPetBookingsService, updateMyBookStatusService } = require("../services/bookingsServices");
const { postUserService, getUsersService } = require("../services/usersServices");
const bcrypt = require("bcryptjs")
const saltRounds = 10

exports.postPetBookings = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await postPetBookingsService(data);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully Added',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.getSinglePetBookings = async (req, res, next) => {
    try {
        const {email} = req.params;
        const result = await getSinglePetBookingsService(email);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.deleteSinglePetBookings = async (req, res, next) => {
    try {
        const data= req.body;
        const result = await deleteSinglePetBookingsService(data._id);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully Deleted',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.getMyAddPets = async (req, res, next) => {
    try {
        const {email} = req.params;
        const result = await getMyAddPetService(email);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}


exports.getUserBookMyPetPetBookings = async (req, res, next) => {
    try {
        const {email} = req.params;
        const result = await getUserMyPetBookingsService(email);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.deleteBookMyPetBookings = async (req, res, next) => {
    try {
        const {email}= req.params;
        const result = await deleteBookMyPetBookingsService(email);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully Deleted',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.updateStatusMyPetBookings = async (req, res, next) => {
    try {
        const {email}= req.params;
        const result = await updateMyBookStatusService(email);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully Updated',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}