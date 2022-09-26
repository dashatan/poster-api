const User = require("../../../../models/User");

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
