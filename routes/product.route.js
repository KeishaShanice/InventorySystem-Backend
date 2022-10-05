const router = require('express').Router()
const { findAllProducts, findProductById, createProduct, updateProduct, deleteProductById} = require('../controllers/product.controller.js')
const mongoose = require('mongoose')


// Validate ObjectId middleware
const validateObjectId = ( req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(204).send()
    } else {
        next()
    }
}


// Get All  Products
router.get('/', async (req, res) => {
    const product = await findAllProducts();
    res.json(product)
})


// Get Product By Id
router.get('/:id', validateObjectId, async (req, res) => {
    try {
        const product = await findProductById(req.params.id)
        res.json(product)
    } catch (err) {
        console.log(err)
        res.status(err?.status ?? 500).json(err)
    }
})


// Create A Product
router.post('/', async (req, res) => {
    try {
        const product = await createProduct(req.body)
        res.status(201).json(product)
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})


// Update A Product
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        await updateProduct(req.params.id, req.body)
        res.send()
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})


// Delete A Product
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        await deleteProductById(req.params.id)
        res.send()
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})

module.exports = router


