const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    emai: { type: String, unique: true , required: true },
    password: { type: String, required: true },
    mobile: {type: Number, required: true}
}, {collation: 'user-Data'}) 

const User = mongoose.model( 'uerData', userSchema)

module.exports = User