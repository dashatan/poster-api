const User = require("../User");

module.exports.AddUser = async (_parent, args) => {
    const {
        name, age, email, friendId,
    } = args;
    const user = await User.create({
        name,
        age,
        email,
        friendId,
    });
    return user;
};
