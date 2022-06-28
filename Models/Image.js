const mongoose = require("mongoose");

const Image = new mongoose.Schema({
    name:String,
    image:String,
    img:{data:Buffer,contentType: String}
},{timestamps:true,versionKey:false})

module.exports = mongoose.model('Image',Image)