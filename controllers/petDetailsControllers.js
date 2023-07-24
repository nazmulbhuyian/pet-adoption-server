const { getPetsDetailsService, getSinglePetsDetailsService, postPetsDetailsService, deletePetsDetailsService, adminDeletePetsDetailsService } = require("../services/PetDetailsServices");

exports.getPetsDetails = async (req, res, next) => {
    try {

        const result = await getPetsDetailsService();
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
            message: "Data query Failed",
            error: error.message
        })
    }
}

exports.getSinglePetsDetails = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await getSinglePetsDetailsService(id);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfull',
            data: result
        })

} catch (error) {
    res.status(400).json({
        status: 'Failled',
        message: "Data get Failed",
        error: error.message
    })
}
}

exports.postPetsDetails = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await postPetsDetailsService(data);
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
            message: "Data query Failed",
            error: error.message
        })
    }
}

exports.deletePetsDetails = async (req, res, next) => {
    try {
        const item = req.body;
        const result = await deletePetsDetailsService(item._id);
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
            message: "Data query Failed",
            error: error.message
        })
    }
}

exports.adminDeletePetsDetails = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await adminDeletePetsDetailsService(id);
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
            message: "Data query Failed",
            error: error.message
        })
    }
}