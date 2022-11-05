const Cancion = require ("../models/cancion.model")


module.exports.findAll = (req,res) => {
    Cancion.find()
        .then((all)=>res.json({canciones:all}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.create = (req,res) => {
    Cancion.create(req.body)
        .then((newCancion)=>res.json({message:"",cancion:newCancion}))
        .catch((err)=>res.json({message:"Algo salio mal",errors:err.errors}))
}



module.exports.findOne = (req,res) => {
    Cancion.findOne({_id: req.params.id})
        .then((cancion)=>res.json({cancion:cancion}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.update = (req,res) => {
    Cancion.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then((cancion)=>res.json({cancion:cancion}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.delete = (req,res) => {
    Cancion.findOneAndDelete({_id: req.params.id})
        .then((cancion)=>res.json({cancion:cancion}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}
