const router = require('express').Router()
const { findAllProductsRemoteWarehouses,findAllRemoteWarehouses, findRemoteWarehouseById, createRemoteWarehouse, updateRemoteWarehouse, deleteRemoteWarehouseById } = require('../controllers/remoteWarehouse.controller.js')

// Validate ObjectId middleware
const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(204).send()
    } else {
        next()
    }
}


// Find All Products at Remote Warehouses
router.get('/remoteproducts', async (req, res) => {
    try {
        const remoteWarehouses = await findAllProductsRemoteWarehouses()
        res.status(200).json(remoteWarehouses)
    } catch (err) {
        res.status(500).json(err)
    }
})


// Get all remote warehouses
router.get('/remote', async (req, res) => {
    const remoteWarehouse = await findAllRemoteWarehouses()
    res.json(remoteWarehouse)
})


// Get remote warehouse by ID
router.get('/:id', validateObjectId, async (req, res) => {
    try {
        const remoteWarehouse = await findRemoteWarehouseById(req.params.id)
        res.json(remoteWarehouse)
    } catch (err) {
        console.log(err)
        res.status(err?.status ?? 500).json(err)
    }
})


// Create a Remote Warehouse
router.post('/', async (req, res) => {
    try {
        const remoteWarehouse = await createRemoteWarehouse(req.body)
        res.statusMessage(201).json(remoteWarehouse)
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})


//update a warehouse
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        await updateRemoteWarehouse(req.params.id, req.body)
        res.send()
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})


//delete a warehouse
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        await deleteRemoteWarehouseById(req.params.id)
        res.send()
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})

module.exports = router