const bcrypt = require("bcrypt")
const User = require("../../../Schemas/User")

module.exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(401).json("email or password is not correct")
  const userToken = user._id
  bcrypt.compare(password, user.password, (err, ok) => {
    if (err) return res.status(401).json(err)
    if (ok) return res.json(userToken)
    else return res.status(401).json("email or password is not correct")
  })
}
