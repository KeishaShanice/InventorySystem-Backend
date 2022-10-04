const RemoteWarehouse = require('../models/RemoteWarehouse.model.js')

const findAllProductsRemoteWarehouse = async () => RemoteWarehouse.find().populate('product')

//get all warehouses
//get one warehouse
//update warehouse
//delete warehouse

const createRemoteWarehouse = async remoteWarehouseToSave => {
    try {
        const remoteWarehouse = new RemoteWarehouse(remoteWarehouseToSave)
        await remoteWarehouse.save()
        return remoteWarehouse
    } catch (err) {
        throw { status: 500, msg: err.message}
    }
}

module.exports = { findAllProductsRemoteWarehouse, createRemoteWarehouse}