const User = require("../../models/User");

const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = getOneUser;
