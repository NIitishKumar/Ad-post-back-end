const express = require('express')
const {create, getUser, updateUser, getUserById,signIn} = require('../Controllers/User')
const router = express.Router()
//---------> create user
router.post('/',create)
//---------> Get all users
router.get('/',getUser)
//-----------> Update user
router.put('/:id',updateUser)
//-----------> GEt usre by id
router.get('/:id',getUserById)
//-------------> Login
router.post('/signin',signIn)

module.exports = router;