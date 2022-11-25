const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    description:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    filePath:{
        type:String,
        required:[true,"El path es obligatorio"]
    }
},
{timestamps:true});


const Image = mongoose.model("Image",ImageSchema);
module.exports = {ImageSchema,Image}