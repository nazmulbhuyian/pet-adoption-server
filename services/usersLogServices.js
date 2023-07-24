const Users = require("../models/Users");

exports.getLogUsersService = async (data) => {
    try {
        const users = await Users.findOne({ email: data });
        return users;
    } catch (error) {
        console.log(error);
    }
}