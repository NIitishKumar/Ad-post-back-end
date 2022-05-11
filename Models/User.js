const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    phone:{
        type:String,
        required:[true, 'number is required !'],
        unique:true
    },
    email:{
        type:String,
        lowercase:true,
        unique:[true,'User already exist with this mail id'],
        required:true
    },
    password:{
        type:String,
        required:[true, 'password is required !']
    },
    image:{
        type:String
    }

},{timeseries:true, versionKey:false}) 

module.exports =  mongoose.model('User',User)