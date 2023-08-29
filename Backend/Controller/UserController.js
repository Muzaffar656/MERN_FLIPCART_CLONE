const User  = require('../Models/UserModel')
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY 
const Register = async(req,res)=>{

    const {name,email,password} = req.body;
    const user = await User.create({
        name,
        email,
        password
    })
    const JWT = jwt.sign({user:{
        name:user.name,
        email:user.email,
        password:user.password
    }},
    JWT_KEY 
    )
    res.json(JWT)
   
}
const Login = (req,res)=>{
    res.json({Login:"True"})
}


module.exports = {Register , Login}