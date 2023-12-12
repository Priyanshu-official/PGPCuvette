const express = require('express')
const mongoose = require('mongoose');
const authRouter = require('./route/auth.js')

const app = express()


app.get('/', (req,res) => {
    res.send("First Server")
})
//  Health Route 
app.get('/health', (req,res) => {
    const serverName = "The Week List"
    const currentTime  = new Date().toLocaleString()
    const serverStatus = determineServerState()

    const healthInfo = {
        serverName: serverName,
        currentTime: currentTime,
        serverStatus: serverStatus
    }
    res.send(healthInfo)
})

function determineServerState () {
    return 'Active'
}

// Route not found middleware
app.get("*", (req, res) => {
    res.status(404).send('404 - Page not found');
})


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/MYDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,   
}).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


// Middleware  to parse JSON
app.use(express.json())

// --- Router -- //
app.use('/auth', authRouter)


// Start the server
app.listen(3000, ()=>{
    console.log("Server running successfully on http://localhost:3000")
})