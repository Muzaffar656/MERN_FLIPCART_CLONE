const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser =require("body-parser")
dotenv.config()
const fileUploads = require('express-fileupload')
const PORT = process.env.PORT || 9000
const ConnectMongo = require("./Config/db")
ConnectMongo()
const cloudinary = require('cloudinary')
const user = require('./Routes/UserRoute')
const Product = require('./Routes/ProductRoute')
app.use(express.json()) 
app.use(fileUploads({
  useTempFiles:true
}))
app.use(bodyParser.urlencoded({ extended: true }));

cloudinary.config({ 
cloud_name: 'dlinbaowa', 
api_key: '811992712136645', 
api_secret: 'rpCZ7kD4XR03pXq3xtGvtQBcqRE' 
});
app.use('/api/v1',user)
app.use('/api/v2/',Product)




app.get('/',(req,res)=>{
    res.send("Flipkart Clone")
})



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})