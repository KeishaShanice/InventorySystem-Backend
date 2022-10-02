const Product = require('../models/Product.model.js')

const findAllProducts = async () => await Product.find()

const findProductById = async id => {
    try {
        const product = await Product.findById(id)
        if (product == null) {
            throw { status: 204, msg: `No Product with the id ${id} was found`}
        }
    } catch (err) {
        throw err
    }
}

const createProduct = async productToSave => {
    try {
        const product = new Product(productToSave)
        await product.save()
        return product
    } catch (err) {
        throw err
    }
}


const updateProduct = async (id, productToUpdate) => {
    try {
        await Product.findByIdAndUpdate(id, productToUpdate)
    } catch (err) {
        throw { status: 400, msg: err}
    }
}


const deleteProductById = async id => await Product.findByIdAndDelete(id)


module.exports = { findAllProducts, findProductById, createProduct, updateProduct, deleteProductById}