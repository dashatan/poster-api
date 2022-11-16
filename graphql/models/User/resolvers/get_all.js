const User = require("..")

module.exports.GetAllUsers = async () => {
  const users = await User.find()
  return users
}
