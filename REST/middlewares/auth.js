const User = require("../../Schemas/User")

module.exports.auth = async (req, res, next) => {
  const authToken = req.headers.authorization
  res.status(401).json(authToken)
  // const user = await User.findById(req.body.userId)
  // return res.status(401).json({ body: req.body, headers: req.headers })
  // if (!user) return res.status(403).json("You Are Unauthorized")
  next()
}
