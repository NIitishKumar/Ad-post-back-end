const express = require('express')
const { uploadImage, getAllImages } = require('../../Controllers/Upload-image/Upload-image')
var multer = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        console.log(file)
         cb(null, Date.now() + "." +ext);
    },
  });


  
  const upload = multer({ storage: storage }).single('image');
  const router = express.Router()

router.post('/',upload,uploadImage)
router.get('/',getAllImages)

module.exports =  router