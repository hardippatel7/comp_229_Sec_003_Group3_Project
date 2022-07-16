
// Import
let mongoose = require('mongoose');

// Create a model class
let productModel = mongoose.Schema(
    {
        id: String,
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