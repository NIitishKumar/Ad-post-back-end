const mongoose = require('mongoose')


const Ad = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'title is required !']
    },
    image:{
        type:String,
    },
    category:{
        type:String,
        required:[true,'category is required !']
    },
    price:{
        type:Number,
        required:[true,'Price is required !']
    },
    description:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true, versionKey:false})

module.exports =  mongoose.model("Ad",Ad)