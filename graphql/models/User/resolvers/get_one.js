const User = require("..")

module.exports.GetOneUser = async (_parent, args) => {
  const { _id } = args
  const user = await User.findById(_id)
  return user
}
