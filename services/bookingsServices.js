const Bookings = require("../models/Bookings");
const nodemailer = require("nodemailer");
const mg = require('nodemailer-mailgun-transport');
const PetsDetails = require("../models/PetDetails");
require('dotenv').config();


function sendBookingEmail(booking) {
    const { o_email, b_email, p_name, b_name, o_name } = booking;

    const auth = {
        auth: {
            api_key: process.env.EMAIL_SEND_KEY,
            domain: process.env.EMAIL_SEND_DOMAIN
        }
    }

    const transporter = nodemailer.createTransport(mg(auth));

    transporter.sendMail({
        from: "nazmulnobel01885@gmail.com", // verified sender email
        // to: o_email, // recipient email
        to: "nazmulbhuyian000@gmail.com", // recipient email
        subject: `${b_name} request you for adoption ${p_name}`, // Subject line
        text: `Hello ${o_name}`, // plain text body
        html: `
        <h3>Your ${p_name} is ready for adoption. Buyer Email is: ${b_email}</h3>
        <div>
        <p>Please visit Your Dashboard</p>
        <p>Thanks from Pet Adoption</p>
        </div>
        `, // html body
    }, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


exports.postPetBookingsService = async (data) => {
    try {
        const users = await Bookings.create(data);
        sendBookingEmail(data);
        return users;
    } catch (error) {
        console.log(error);
    }
}

exports.getSinglePetBookingsService = async (email) => {
    try {
        const users = await Bookings.find({ b_email: email });
        return users;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteSinglePetBookingsService = async (id) => {
    try {
        const users = await Bookings.deleteOne({ _id: id });
        return users;
    } catch (error) {
        console.log(error);
    }
}


exports.getMyAddPetService = async (email) => {
    try {
        const users = await PetsDetails.find({ e_mail: email });
        return users;
    } catch (error) {
        console.log(error);
    }
}

exports.getUserMyPetBookingsService = async (email) => {
    try {
        const users = await Bookings.find({ o_email: email });
        return users;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteBookMyPetBookingsService = async (id) => {
    try {
        const users = await Bookings.deleteOne({ _id: id });
        return users;
    } catch (error) {
        console.log(error);
    }
}

exports.updateMyBookStatusService = async (id) => {
    try {
        const user = await Bookings.findOne({ _id: id });
        const updateStatus = {
            status: 'Yes'
        };
        const updateUser = await Bookings.updateOne(user, updateStatus, {
            runValidators: true
        });
        return updateUser;
    } catch (error) {
        console.log(error);
    }
}