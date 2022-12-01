const bcrypt = require("bcrypt")
const User = require("../../../Schemas/User")

module.exports.signup = async (req, res) => {
  const { name, password, email } = req.body
  let user = await User.findOne({ email })
  if (user) return res.status(403).json("User already exists")

  try {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    user = await User.create({ name, email, password: hash })
    const userToken = user._id
    res.json(userToken)
  } catch (error) {
    res.status(400).json(error)
  }
}
