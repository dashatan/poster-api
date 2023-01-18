const User = require("../../Schemas/User")

module.exports.auth = async (req, res, next) => {
  const authorization = req.headers.authorization
  if (!authorization) return res.status(401).json("authorization header is not prepared")
  const token = authorization.split(" ")[1]
  if (!token) return res.status(401).json("authToken is not prepared")
  const user = await User.findById(token)
  if (!user) return res.status(403).json("You Are Unauthorized")
  next()
}
