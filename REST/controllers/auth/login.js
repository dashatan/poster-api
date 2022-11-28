const bcrypt = require("bcrypt")
const User = require("../../../Schemas/User")

module.exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(401).json("email or password is not correct")
  bcrypt
    .compare(password, user.password)
    .then(() => res.json(user._id))
    .catch(() => res.status(401).json("email or password is not correct"))
}
