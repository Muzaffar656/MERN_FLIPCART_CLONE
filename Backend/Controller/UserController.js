const User  = require('../Models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const JWT_KEY = process.env.JWT_KEY 
const Register = async(req,res)=>{

    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status(400).json({Error:"All fields are mandatory!"})
    }
    const UserAlready = await User.findOne({email})
    if(UserAlready){
        res.status(400).json({Error:"User are Already Registerd!"})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
        name,
        email,
       password: hashedPassword
    })
    const JWT = jwt.sign({user:{
        id:user._id,
        name:user.name,
        email:user.email,
        password:user.password
    }},
    JWT_KEY 
    )
    res.json(JWT)
   
}
const Login = async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(400).json({Error:"All fields are mandatory!"})
    }
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200)
        const JWT = jwt.sign({
            user:{
                name:user.name,
                email:user.email,
                id:user._id
            }
        },
        JWT_KEY
        )
        res.status(200).json({JWT,user})
    }else{
        res.status(400).json({Error:"Email and Password is not valid"})
    }
}

const currentUser = async (req,res)=>{
    res.json(req.user) 
}

module.exports = {Register , Login,currentUser}