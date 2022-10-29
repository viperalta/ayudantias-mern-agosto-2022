const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    nombre:String,
    precio:Number
})

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;