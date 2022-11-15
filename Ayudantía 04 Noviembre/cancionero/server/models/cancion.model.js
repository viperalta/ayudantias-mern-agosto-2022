const mongoose = require("mongoose");

const CancionSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"La marca es obligatoria (back)"],
        min:[4,"Debe colocar hasta 4 caracteres"]
    },
    artista:{
        type:String,
        required:[true,"El artista es obligatorio (back)"],
        min:[4,"Debe colocar hasta 4 caracteres"]
    },
    compositores:{
        type:Array,
        required:[true,"Es necesario agregar un compositor"]
    },
    likes:{
        type:Number,
        default: 0
    }
    
},
{timestamps:true})

const Cancion = mongoose.model("Cancion",CancionSchema);

module.exports = Cancion;