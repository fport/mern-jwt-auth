const User = require('../models/User')

exports.login = async (req, res, next) => {
  const { username, email, password } = req.body

  try {
    const user = await User.create({
      username,
      email,
      password
    })
  } catch (error) {}
  console.log(error)
}

exports.register = (req, res, next) => {
  res.send('Register Route')
}

exports.forgotpassword = (req, res, next) => {
  res.send('Forgot Password Route')
}

exports.resetpassword = (req, res, next) => {
  res.send('Reset Password Route')
}
