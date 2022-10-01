const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    details: {
        name: {
            type: String,
        },
        description: String,
        required: true
    },
    type: {
        type: String,
        enum: ['CD', "Collectable" ],
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Cannot have less than 0"]
    }
})

const Product = mongoose.model('Product', productSchema, 'Product')
module.exports = Product


