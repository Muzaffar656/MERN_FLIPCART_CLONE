const cloudinary = require('cloudinary').v2
const Product = require('../Models/ProductModel')

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
        }
    })
    res.status(200).json({message:"Product Created Succesfully"})
}

module.exports = createProduct