const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
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

app.get('/register',(req,res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/api/register',(req,res) => {
    res.send(req.body.Name + ' ' + req.body.Phone)
})


// Attaching the server to the port
app.listen(3000,() => {
    console.log("Server running successfully on http://localhost:3000");
})

// Run the server 