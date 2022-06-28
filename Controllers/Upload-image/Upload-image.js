const multer  = require('multer')
const Image = require('../../Models/Image')
var jwt = require('jsonwebtoken');
const User = require('../../Models/User');
const fs = require('fs')


exports.uploadImage = async (req,res) => {
    let img = fs.readFileSync(req.file.path);
    let enc_img = img.toString('base64')

    console.log(new Buffer.from(enc_img,'base64'))
    let image = await Image.create({...req.body,image:req.file.filename,img:{data: Buffer.from(enc_img,'base64'),contentType:req.file.mimetype}})
    res.send(image)
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