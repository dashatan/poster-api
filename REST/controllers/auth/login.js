const bcrypt = require("bcrypt")
const User = require("../../../Schemas/User")

module.exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(401).json("email or password is not correct")
  const userToken = user._id
  bcrypt
    .compare(password, user.password)
    .then(() => res.json(userToken))
    .catch(() => res.status(401).json("email or password is not correct"))
}
