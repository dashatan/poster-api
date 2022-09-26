const User = require("../../../../models/User");

module.exports.GetAllUsers = async () => {
    const users = await User.find();
    return users;
};
