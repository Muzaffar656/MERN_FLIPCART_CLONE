const mongoose = require("mongoose")
const MONGO_URI = process.env.MONGO_URI
const ConnectMongo = ()=>{
  mongoose.connect(MONGO_URI).then(()=>console.log("Mongo Connected")).catch((error)=>{console.log(error)})
}
    
module.exports = ConnectMongo