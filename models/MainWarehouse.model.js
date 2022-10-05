const mongoose = require('mongoose')
const Schema = mongoose.Schema

const warehouseSchema = new Schema({
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
    product: [ {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],
    capacity:  {
        type: Number,
        validate: [ inventoryAmount => inventoryAmount  <= 100 && inventoryAmount  >= 1, 'Inventory amount must be between 0 and 100 Items']
    }
})

const Warehouse = mongoose.model('Warehouse', warehouseSchema, 'Warehouse')
module.exports = Warehouse
