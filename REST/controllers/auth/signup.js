const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../../../Schemas/User")

module.exports.signup = async (req, res) => {
  const { password, email } = req.body
  let user = await User.findOne({ email })
  if (user) return res.status(403).json("User already exists")

  user = new User({ ...req.body })

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).json(err)
    bcrypt.hash(password, salt, (error, hash) => {
      if (error) return res.status(500).json(error)
      user.password = hash
    })
  })
  try {
    user = await user.save()
    const payload = { user: { id: user._id } }
    const userToken = await jwt.sign(payload, "randomString")
    res.json(userToken)
  } catch (error) {
    res.status(400).json(error)
  }
}
