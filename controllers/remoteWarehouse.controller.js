const RemoteWarehouse = require('../models/RemoteWarehouse.model.js')

const findAllProductsRemoteWarehouses = async () => await RemoteWarehouse.find().populate('product')

//get all warehouses
const findAllRemoteWarehouses = async () => RemoteWarehouse.find()

//get one warehouse
const findRemoteWarehouseById = async id => {
    try {
        const remoteWarehouse = await RemoteWarehouse.findById(id)
        if (remoteWarehouse == null) {
            throw {status: 204, msg: `No Remote Warehouse with the id ${id} was found.`}
        }
        return remoteWarehouse
    } catch (err) {
        throw err
    }
}

// create warehouse
const createRemoteWarehouse = async remoteWarehouseToSave => {
    try {
        const remoteWarehouse = new RemoteWarehouse(remoteWarehouseToSave)
        await remoteWarehouse.save()
        return remoteWarehouse
    } catch (err) {
        throw { status: 500, msg: err.message}
    }
}

//update warehouse
const updateRemoteWarehouse = async (id, remoteWarehouseToUpdate) => {
    try {
        await RemoteWarehouse.findByIdAndUpdate(id, remoteWarehouseToUpdate)
    } catch (err) {
        throw { status: 400, msg: err }
    }
}

//delete warehouse
const deleteRemoteWarehouseById = async id => await RemoteWarehouse.findByIdAndDelete(id)

module.exports = { findAllProductsRemoteWarehouses, findAllRemoteWarehouses, findRemoteWarehouseById, createRemoteWarehouse, updateRemoteWarehouse, deleteRemoteWarehouseById }