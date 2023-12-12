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

app.listen(process.env.Port,() => {
    console.log("Server Started at http://localhost:"+ process.env.Port)
})