const router = require('express').Router()
const { findAllRemoteWarehouses, createRemoteWarehouse } = require('../controllers/remoteWarehouse.controller.js')


// Find All Remote Warehouses
router.get('/', async (req, res) => {
    try {
        const remoteWarehouses = await findAllRemoteWarehouses()
        res.status(200).json(remoteWarehouses)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Create a Remote Warehouse
router.get('/', async (req, res) => {
    try {
        const remoteWarehouse = await createRemoteWarehouse(req.body)
        res.statusMessage(201).json(remoteWarehouse)
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})

module.exports = router