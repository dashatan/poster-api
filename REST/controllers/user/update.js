const User = require("../../../Schemas/User")

module.exports.userUpdate = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.body.userId }, { ...req.body })
    return res.json(user._id)
  } catch (error) {
    return res.status(400).json(error)
  }
}
