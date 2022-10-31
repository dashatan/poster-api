const User = require("../User");

module.exports.GetAllUsers = async () => {
    const users = await User.find();
    return users;
};
