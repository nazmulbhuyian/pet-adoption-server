const { getLogUsersService } = require("../services/usersLogServices");
const bcrypt = require("bcryptjs")
const saltRounds = 10
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.postLogUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;


        const user = await getLogUsersService(email)
        if (!user) {
            return res.status(400).json({
                status: 'Failled',
                message: "user get Failed",
                error: error.message
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                status: 'Failled',
                message: "user get Failed",
                error: error.message
            })
        }

        const token = jwt.sign({ email }, process.env.ACCESS_TOKEN);
        return res.send({ accessToken: token, user })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "user get Failed",
            error: error.message
        })
    }
}