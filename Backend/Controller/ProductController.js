const cloudinary = require('cloudinary').v2


const createProduct = async (req,res)=>{
   const file = req.files.photo
   const myimage = await cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
    console.log(result)
   })
 
}

module.exports = createProduct