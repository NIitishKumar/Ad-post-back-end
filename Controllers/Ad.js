const Ad = require('../Models/Ads')

exports.getAds = async (req,res) => {
    try{
        let {id} = req.params
        const ads = await Ad.find({user:id})
        res.status(200).json({message:'Ads Found !',ads})

    }catch(err){
        console.log(err)
        res.status(400).json({message:'Something went wrong !',err})
    }
}

exports.create = async (req,res) => {
    try{
        let {id} = req.params
        const ads = await Ad.create({...req.body})
        res.status(200).json({message:'Ads Found !',ads})

    }catch(err){
        console.log(err)
        res.status(400).json({message:'Something went wrong !',err})
    }
}

exports.getAllAds = async (req,res) => {
    try{
        const ads = await Ad.find({}).populate('user')
        res.status(200).json({message:'Ads Found !',ads})

    }catch(err){
        console.log(err)
        res.status(400).json({message:'Something went wrong !',err})
    }
}