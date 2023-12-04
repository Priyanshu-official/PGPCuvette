const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require("../model/model.js")

exports.signup = async (req,res) => {
    try{
        const {id, fullname, email, password, age, gender, mobile} = req.body
        const hashedpass = await bcrypt.hash(password,10)
        const user = new User({
            id, 
            fullname, 
            email,
            password: hashedpass, 
            age, 
            gender, 
            mobile
        })
        await user.save()
        res.status(201).send('User created successfully');
    }catch{
        res.status(400).send('Error creating user');
    }
}

exports.login = async(req,res) => {
    res.send('coming sooon...')
}