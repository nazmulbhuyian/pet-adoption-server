const { postUserService, getUsersService, getAllUserService, makeAdminUserService, deleteUserService } = require("../services/usersServices");
const bcrypt = require("bcryptjs")
const saltRounds = 10

exports.postUsers = async (req, res, next) => {
    try {
        const data = req.body;
        const inserted = await getUsersService(data?.email)
        if (inserted) {
            return res.send({ message: 'Previously Added' })
        } else {
            bcrypt.hash(data.password, saltRounds, async function (err, hash) {
                const newUser = {
                    name: data.name,
                    email: data.email,
                    role: data.role,
                    password: hash,
                    phone: data.phone
                }
                const result = await postUserService(newUser);
                if (!result) {
                    return res.send('nothing found');
                }
                res.status(200).json({
                    status: 'Successfully',
                    data: result
                })
            });
        }

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.getAllUsers = async (req, res, next) => {
    try {
        const result = await getAllUserService();
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
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.getAdminUsers = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await makeAdminUserService(data._id);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully Update',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.deleteUsers = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await deleteUserService(data._id);
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
            message: "Data Post Failed",
            error: error.message
        })
    }
}