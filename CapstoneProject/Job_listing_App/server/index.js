const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const User = require("./Model/userDetails")
dotenv.config({path: './vars/.env'})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.send("Welcome to the API!")
})


app.get("/user", async (res,req) => {
    try{
      const users =  await User.find({})
      res.json({
        staus: "success",
        data: users
      })        
    }catch (err){
        res.json({
          status:"Failed",
          message: err.message
        })
    }
})




// Health API
app.get('/health', (req, res)=>{
    const serverStatus = "OK"
    const currentTime = new Date().toLocaleString()
    const serverName = "Job Listing API"
    const healthInfo = {
        serverName: serverName,
        serverStatus: serverStatus,
        currentTime: currentTime
    }
    res.send(healthInfo)
})

//  Connection Method
app.listen(process.env.Port,() => {
    mongoose.connect(process.env.MongoDB_URL)
    .then(() => {console.log("Connected to MongoDB")})
    .catch((err)=>{console.log('MongoDB connection error:', err)})
    console.log("Server Started at http://localhost:"+ process.env.Port)
})