const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type:Number, unique:true},
    fullname: String,
    email: { type: String, unique: true },
    password: String,
    age: Number,
    gender: String,
    mobile: String,
})

const User = mongoose.model('User', userSchema) 

module.exports = User
