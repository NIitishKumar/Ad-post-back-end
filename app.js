const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoutes = require('./Routes/User')
const adRoutes = require('./Routes/Ad')


dotenv.config()
let app = express()


//---------------> mongoDB Connection
const connectDB = async () => {
    try{

        await mongoose.connect(
            process.env.MONGO_URL
        )

    }catch(err){
        console.log(err)
    }
}
connectDB()

//--------------->

var corsOption = {
    origin:'*'
}

app.use(cors(corsOption))
app.use(express.json())

app.use('/user',userRoutes)
app.use('/ad',adRoutes)

app.get('/',(req,res) => {
    res.send('Server is running !')
})

app.listen(9000, (err) => {
    if (!err) {
        console.log('server is running on port 9000 !')
    }
})