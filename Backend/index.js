const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 9000
const ConnectMongo = require("./Config/db")
ConnectMongo()


const user = require('./Routes/UserRoute')
app.use('/api/v1',user)
app.get('/',(req,res)=>{
    res.send("Flipkart Clone")
})



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})