const express = require('express')
const app = express()
const router = express.Router()

//test
app.use("/", (req, res) => {
    res.json({message:"Hi There"})
})

module.exports = router