const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/pokemonesMongooseDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("BASE DE DATOS CONECTADA"))
    .catch(err=>console.log("Algo salio mal",err))