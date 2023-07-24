const PetsDetails = require("../models/PetDetails");

exports.getPetsDetailsService = async () => {
        const petsDetails = await PetsDetails.find({});
        return petsDetails;
}

exports.getSinglePetsDetailsService = async (id) => {
        const petsDetails = await PetsDetails.findOne({ _id: id });
        return petsDetails;
}

exports.postPetsDetailsService = async (data) => {
        try {
                const petsDetails = await PetsDetails.create(data);
                return petsDetails;
        } catch (error) {
                console.log(error);
        }
}

exports.deletePetsDetailsService = async (id) => {
        try {
                const petsDetails = await PetsDetails.deleteOne({_id: id});
                return petsDetails;
        } catch (error) {
                console.log(error);
        }
}

exports.adminDeletePetsDetailsService = async (id) => {
        try {
                const petsDetails = await PetsDetails.deleteOne({_id: id});
                return petsDetails;
        } catch (error) {
                console.log(error);
        }
}