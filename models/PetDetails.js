
const mongoose = require("mongoose");

// Schema Design
const petsDetailsSchema = new mongoose.Schema({
    e_mail: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String
    },
    colour: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: String
    },
    size: {
        required: true,
        type: String
    },
    p_name: {
        type: String,
        lowercase: true
    },
    sex: {
        required: true,
        type: String
    },
    weight: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    o_name: {
        type: String,
        lowercase: true
    },
    phone: {
        required: true,
        type: String
    },
    details: {
        required: true,
        type: String
    },
    
   
}, {
    timestamps: true
}
)


// Model
const PetsDetails = mongoose.model("petdetails", petsDetailsSchema);

module.exports = PetsDetails;