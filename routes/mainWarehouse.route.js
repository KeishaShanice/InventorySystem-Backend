<<<<<<< Updated upstream
const express = require('express')
const app = express()
const router = express.Router()

//test
app.use("/", (req, res) => {
    res.json({message:"Hi There"})
})

=======
const router = require('express').Router()
const { findAllProductsWarehouse, createWarehouse } = require('../controllers/mainWarehouse.controller.js')


// Get All Warehouse
router.get('/', async (req, res) => {
    try {
        const warehouses = await findAllProductsWarehouse()
        res.status(200).json(warehouses)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Create warehouse
router.post('/', async (req, res) => {
    try {
        const warehouse = await createWarehouse(req.body)
        res.status(201).json(warehouse)
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})


>>>>>>> Stashed changes
module.exports = router