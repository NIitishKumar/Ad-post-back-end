const mongoose = require("mongoose");

const Image = new mongoose.Schema({
    name:String,
    image:String
})

module.exports = mongoose.model('Image',Image)