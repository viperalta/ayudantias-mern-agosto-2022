const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio (back)"]
    },
    precio:{
        type:Number,
        required:[true,"El precio es obligatorio (back)"]
    },
    reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"Review"}]
},
{timestamps:true})

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;