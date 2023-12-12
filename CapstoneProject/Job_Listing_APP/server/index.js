const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require('mongoose')
dotenv.config({path: './vars/.env'})

const app = express()

app.bodyParser(bodyParser.urlencoded({exteded: false}))

app.get("/", (req,res) => {
    res.send("Welcome to the API!")
})



app.listen(3000,() => {
    console.log("Server Started at http://localhost:3000")
})