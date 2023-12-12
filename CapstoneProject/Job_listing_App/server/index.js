const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require('mongoose')
dotenv.config({path: './vars/.env'})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.send("Welcome to the API!")
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

app.listen(process.env.Port,() => {
    mongoose.connect(process.env.MongoDB_URL)
    .then(() => {console.log("Connected to MongoDB")})
    .catch((err)=>{console.log('MongoDB connection error:', err)})
    console.log("Server Started at http://localhost:"+ process.env.Port)
})