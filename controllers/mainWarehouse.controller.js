const Warehouse = require('../models/MainWarehouse.model.js')

const findAllProductsWarehouse = async () => await Warehouse.find().populate('product')

//get all warehouses
const findAllWarehouses = async () => Warehouse.find()


//get one warehouse
const findWarehouseById = async id => {
    try {
        const warehouse = await Warehouse.findById(id)
        if (warehouse == null) {
            throw {status: 204, msg: `No Warehouse with the id ${id} was found.`}
        }
        return warehouse
    } catch (err) {
        throw err
    }
}


// create warehouse
const createWarehouse = async warehouseToSave => {
    try {
        const warehouse = new Warehouse(warehouseToSave)
        await warehouse.save()
        return warehouse
    } catch (err) {
        throw { status: 500, msg: err.message }
    }
}


//update warehouse
const updateWarehouse = async (id, warehouseToUpdate) => {
    try {
        await Warehouse.findByIdAndUpdate(id, warehouseToUpdate)
    } catch (err) {
        throw { status: 400, msg: err }
    }
}


//delete warehouse
const deleteWarehouseById = async id => await Warehouse.findByIdAndDelete(id)


module.exports = { findAllProductsWarehouse, findAllWarehouses, findWarehouseById, createWarehouse, updateWarehouse, deleteWarehouseById }