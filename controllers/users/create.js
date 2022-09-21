const User = require("../../models/User");

const addOneUser = async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const user = await User.create({
            name,
            age,
            email,
        });
        res.json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = addOneUser;
