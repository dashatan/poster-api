const User = require("../User");

module.exports.UpdateUser = async (_parent, args) => {
    const {
        _id, name, age, email, friendId,
    } = args;
    const user = await User.findByIdAndUpdate(
        _id,
        {
            name,
            age,
            email,
            friendId,
        },
        {
            returnDocument: "after",
        },
    );
    return user;
};
