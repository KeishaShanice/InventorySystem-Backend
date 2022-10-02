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
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    capacity:  {
        type: Number,
        validate: [ inventoryAmount => inventoryAmount  <= 100 && inventoryAmount  >= 0, 'Inventory amount must be between 0 and 50 Items']
    },
    category: {
        type: String,
        enum: ['CD', "Collectable" ],
        required: true
    }
})

const Warehouse = mongoose.model('Warehouse', warehouseSchema, 'Warehouse')
module.exports = Warehouse
