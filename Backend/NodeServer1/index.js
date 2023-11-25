const express = require('express')

const app = express()

// Create Get Route

app.get('/',(req,res) => {
    res.send("First Server")
})

app.get('/user',(req,res) => {
    const DataObj = {
        Name: 'King',
        Power:"Can't Major",
        Age:"xx",
        Realm:"Demonic Realm",
        Tets:"Text"
    }

    res.json(DataObj)
})

app.get('/about',(req,res) => {
    res.sendFile(__dirname + '/about.html')
})
// Attaching the server to the port
app.listen(3000,() => {
    console.log("Server running successfully on http://localhost:3000");
})

// Run the server 