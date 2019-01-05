const mongoose = require('mongoose');

const shoppingListSchema = mongoose.Schema({
    name: String,
    price: String,
    quantity: String,
    done:String
}, {
    timestamps: true
});

module.exports = mongoose.model('shoppingList', shoppingListSchema);
