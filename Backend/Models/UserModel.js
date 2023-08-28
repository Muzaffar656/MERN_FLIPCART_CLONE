const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required : [true,"Please Enter Your Name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"]
    },
    password:{
        type:String,
        required: [true, "Please Enter Your Password"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
const User = mongoose.model("User",UserSchema)
module.exports = User