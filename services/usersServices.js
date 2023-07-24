
const Users = require("../models/Users");

exports.getUsersService = async (data) => {
    // const users = await Users.findOne({email:data})
    try {
        const users = await Users.findOne({ email: data }).select('-password -createdAt -updatedAt -__v');
        return users;
    } catch (error) {
        console.log(error);
    }
}

exports.postUserService = async (data) => {
    try {
        const users = await Users.create(data);
        return users;
    } catch (error) {
        console.log(error);
    }
}

exports.getAllUserService = async () => {
    try {
        const users = await Users.find({}).select('-password -createdAt -updatedAt -__v');
        return users;
    } catch (error) {
        console.log(error);
    }
}

exports.makeAdminUserService = async (id) => {
    try {
        const user = await Users.findOne({ _id: id });
        const updateStatus = {
            role: 'admin'
        };
        const updateUser = await Users.updateOne(user, updateStatus, {
            runValidators: true
        });
        return updateUser;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteUserService = async (id) => {
    try {
        const users = await Users.deleteOne({_id: id})
        return users;
    } catch (error) {
        console.log(error);
    }
}