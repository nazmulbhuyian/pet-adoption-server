
const mongoose = require("mongoose");

// Schema Design
const BookingsSchema = new mongoose.Schema({
    p_name: {
        type: String,
        required: true,
    },
    p_img: {
        required: true,
        type: String
    },
    o_email: {
        required: true,
        type: String
    },
    o_name: {
        required: true,
        type: String
    },
    o_phone: {
        required: true,
        type: String
    },
    detail_id: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    b_name: {
        required: true,
        type: String
    },
    b_email: {
        required: true,
        type: String
    },
    b_phone: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String
    }
}, {
    timestamps: true
}
)


// Model
const Bookings = mongoose.model("bookings", BookingsSchema);

module.exports = Bookings;