const cloudinary = require('cloudinary').v2
const Product = require('../Models/ProductModel')

// get user selected product

const getuserproduct = async(req,res)=>{
    const product = await Product.find({user_id:req.user.id})
    res.status(200).json(product)
}


// Create Product API
const createProduct = async (req,res)=>{
    const file = req.files.images

 const mycloud =   await cloudinary.uploader.upload(file.tempFilePath)

    const {name,description,price,category} = req.body;
    if(!name || !description || !price || !category ){
        res.status(400).json({Error:"All Fields Are mendotry"})
    }
    const product = await Product.create({
        name,
        description,
        price,
        category,
        images:{
            public_id:mycloud.public_id,
            url : mycloud.url
        },
        user_id:req.user.id
    })
    res.status(200).json({message:"Product Created Succesfully"})
}

// Get All Products

const getAllProducts = async(req,res)=>{
    const AllProducts = await Product.find()
    res.status(200).json({
        success:true,
        AllProducts
    })
}

// Get single Product 

const getSingleProduct = async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(!product){
        res.status(400).json({Error:"Product Not Found"})
    }
    res.json({
        product,
        success : true
    })
}

module.exports = {createProduct,getAllProducts,getSingleProduct,getuserproduct}