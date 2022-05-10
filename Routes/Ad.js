const express = require('express')
const{create, getAds,getAllAds} = require('../Controllers/Ad')

const router = express.Router()

router.get('/:id',getAds)
router.post('/:id',create)
router.get('/',getAllAds)

module.exports = router;