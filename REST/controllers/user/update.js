const User = require("../../../Schemas/User")

module.exports.userUpdate = async (req, res) => {
  try {
    const authorization = req.headers.authorization
    const token = authorization.split(" ")[1]
    const user = await User.findOneAndUpdate({ _id: token }, { ...req.body })
    return res.json(user)
  } catch (error) {
    return res.status(400).json(error)
  }
}
