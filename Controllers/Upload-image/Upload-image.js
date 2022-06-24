const multer  = require('multer')
const Image = require('../../Models/Image')
var jwt = require('jsonwebtoken');
const User = require('../../Models/User');


exports.uploadImage = async (req,res) => {

    console.log(req.file)
    await Image.create({...req.body,image:req.file.filename})
    res.send(`http://localhost:9000/${req.file.filename}`)
}

exports.getAllImages = async (req,res) => {
    try {

        // console.log('--------------->',req.headers.authorization.split(' ')[1])
        let token = req.headers.authorization.split(' ')[1]
        if ((token === 'false')) {
            res.status(400).json({message:"Unauthorized request !"})
            return;
        }
        let userData = await jwt.verify(token,'SECRETKEYFORUSER')
        let user = await User.findOne({email:userData.email,password:userData.password})
        if (user) {
            let images = await Image.find({})
            res.status(200).json({message:"All images",images})
            return;
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({message : "Something went wrong !",error})
    }
}