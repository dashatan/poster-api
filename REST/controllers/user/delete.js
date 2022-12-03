const User = require("../../../Schemas/User")

module.exports.userDelete = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.body.userId })
    return res.json(user._id)
  } catch (error) {
    return res.status(400).json(error)
  }
}
