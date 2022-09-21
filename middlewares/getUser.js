const User = require("../models/User");

const getUser = async (req, res, next) => {
    let user;
    try {
        const { id } = req.params;
        user = await User.findById(id);
        if (user == null) {
            res.status(404).json({ message: "can not find user" });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
    res.user = user;
    next();
};

module.exports = getUser;
