const User  = require('../Models/UserModel')
const jsonwebtoken = require('jsonwebtoken')
const Register = (req,res)=>{
    const {name,email,password} = req.body
    const user = User.create({
        name,
        email,
        password
    })
    const JWT = jsonwebtoken.sign()
}
const Login = (req,res)=>{
    res.json({Login:"True"})
}


module.exports = Register , Login