const express = require('express')
const router = express.Router()
const Register = require('../Controller/UserController')
const Login = require('../Controller/UserController')
router.route('/register').post(Register)
router.route('/login').post(Login)


module.exports = router