const express = require('express')
const app = express()
const mongoose = require('mongoose') 
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

// Routes
app.use('/product', require('./routes/product.route.js'))
app.use('/mainwarehouse', require('./routes/mainWarehouse.route.js'))
app.use('/remotewarehouse', require('./routes/remoteWarehouse.route.js'))

//test
// app.use("/", (req, res) => {
//     res.json({message:"Hi There"})
// })

const connnectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Mongo")
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

connnectToMongo()

app.listen(process.env.PORT || 8080, ()=> {
    console.log(`Listening on port ${process.env.PORT || 8080}`)
})


