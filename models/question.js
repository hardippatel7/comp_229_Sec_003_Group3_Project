
// Import
let mongoose = require('mongoose');

// Create a model class
let questionModel = mongoose.Schema(
    {
        userId: String,
        productId: String,
        question: String,
        reply: String
    },
    {
        collection: "questions"
    }
);

module.exports = mongoose.model("Question", questionModel);