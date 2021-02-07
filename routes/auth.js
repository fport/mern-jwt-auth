const express = require('express')
const router = express.Router()

// Controllers
const { login, register, forgotpassword, resetpassword } = require('../controllers/auth')

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/forgotpassword').post(forgotpassword)
router.route('/resetpassword/:resetToken').put(resetpassword)

module.exports = router
