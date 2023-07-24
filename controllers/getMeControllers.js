const { promisify } = require('util');
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUsersService } = require('../services/usersServices');

exports.getMeUser = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")?.[1];
        const decode = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN);

        const user= await getUsersService(decode.email);
        // console.log(user);
        // res.json(decode.email);
        res.status(200).json({
            status: 'Successfully',
            email: decode.email,
            userName:user.name,
            userPhone: user.phone,
            userRole: user.role
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "get me Failed",
            error: error.message
        })
    }
}