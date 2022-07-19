
// Import
let mongoose = require('mongoose');

// Create a model class
let productModel = mongoose.Schema(
    {
        name: String,
        description: String,
        amount: Number,
        status: String
    },
    {
        collection: "products"
    }
);

module.exports = mongoose.model("Product", productModel);