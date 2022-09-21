const User = require("../../models/User");

const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = getAllUsers;
