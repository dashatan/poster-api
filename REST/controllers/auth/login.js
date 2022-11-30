const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../../../Schemas/User")

module.exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(401).json("email or password is not correct")
  const payload = { user: { id: user._id } }
  const userToken = await jwt.sign(payload, "randomString")
  bcrypt
    .compare(password, user.password)
    .then(() => res.json(userToken))
    .catch(() => res.status(401).json("email or password is not correct"))
}
