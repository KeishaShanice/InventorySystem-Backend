const Warehouse = require('../models/MainWarehouse.model.js')

const findAllProductsWarehouse = async () => await Warehouse.find().populate('product')

//get all warehouses
//get one warehouse
//update warehouse
//delete warehouse

const createWarehouse = async warehouseToSave => {
    try {
        const warehouse = new Warehouse(warehouseToSave)
        await warehouse.save()
        return warehouse
    } catch (err) {
        throw { status: 500, msg: err.message }
    }
}

module.exports = { findAllProductsWarehouse, createWarehouse}