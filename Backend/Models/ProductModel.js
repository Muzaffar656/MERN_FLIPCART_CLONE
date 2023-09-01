const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    images:{
        public_id:{
            type:String
        },
        url:{
            type:String
        }
    }
    
})

const Product = mongoose.model('Product',ProductSchema)
module.exports = Product