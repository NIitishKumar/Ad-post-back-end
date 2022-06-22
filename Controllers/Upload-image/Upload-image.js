const multer  = require('multer')
const Image = require('../../Models/Image')

exports.uploadImage = async (req,res) => {

    console.log(req.file)
    await Image.create({...req.body,image:req.file.filename})
    res.send(`http://localhost:9000/${req.file.filename}`)
}

exports.getAllImages = async (req,res) => {
    try {
        let images = await Image.find({})
        res.status(200).json({message:"All images",images})
    } catch (error) {
        res.status(400).json({message : "Something went wrong !",error})
    }
}