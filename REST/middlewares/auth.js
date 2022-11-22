const User = require("../../Schemas/User")

module.exports.auth = async (req, res, next) => {
  const user = await User.findById(req.body.userId)
  if (!user) return res.status(403).json("You Are Unauthorized")
  next()
}
