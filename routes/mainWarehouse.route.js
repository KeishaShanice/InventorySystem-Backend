const router = require('express').Router()
const { findAllProductsWarehouse, findAllWarehouses, findWarehouseById, createWarehouse, updateWarehouse, deleteWarehouseById  } = require('../controllers/mainWarehouse.controller.js')
const mongoose = require('mongoose')

// Validate ObjectId middleware
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(204).send()
    } else {
        next()
    }
}


// Get All Warehouse Products
router.get('/warehouseproducts', async (req, res) => {
    try {
        const warehouses = await findAllProductsWarehouse()
        res.status(200).json(warehouses)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Get all warehouses
router.get('/', async (req, res) => {
    const warehouse = await findAllWarehouses()
    res.json(warehouse)
})


// Get warehouse by ID
router.get('/:id', validateObjectId, async (req, res) => {
    try {
        const warehouse = await findWarehouseById(req.params.id)
        res.json(warehouse)
    } catch (err) {
        console.log(err)
        res.status(err?.status ?? 500).json(err)
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


//update a warehouse
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        await updateWarehouse(req.params.id, req.body)
        res.send()
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})


//delete a warehouse
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        await deleteWarehouseById(req.params.id)
        res.send()
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})


module.exports = router