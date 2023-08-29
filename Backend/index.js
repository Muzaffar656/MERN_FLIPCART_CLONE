const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser =require("body-parser")
dotenv.config()
const PORT = process.env.PORT || 9000
const ConnectMongo = require("./Config/db")
ConnectMongo()
app.use(express.json()) 


const user = require('./Routes/UserRoute')
app.use('/api/v1',user)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("Flipkart Clone")
})



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})