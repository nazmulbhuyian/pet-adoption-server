
const mongoose = require("mongoose");

// Schema Design
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        required: true,
        type: String
    },
    role: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    }
}, {
    timestamps: true
}
)


// Model
const Users = mongoose.model("users", usersSchema);

module.exports = Users;