const mongoose = require('mongoose')
const Schema = mongoose.Schema

const remoteWarehouseSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    location: {
        type: String,
        maxlength: 50,
        required: true
    },
    product: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],
    capacity:  {
        type: Number,
        validate: [ inventoryAmount => inventoryAmount  <= 50 && inventoryAmount  >= 1, 'Inventory amount must be between 1 and 50 Items']
    }
})


const RemoteWarehouse = mongoose.model('RemoteWarehouse', remoteWarehouseSchema, 'RemoteWarehouse')
module.exports = RemoteWarehouse