const User = require("..")

module.exports.GetOneUser = async (_parent, args) => {
  const { _id } = args

  try {
    const user = await User.findById(_id)
    return user
  } catch (error) {
    throw new Error("User not found")
  }
}
