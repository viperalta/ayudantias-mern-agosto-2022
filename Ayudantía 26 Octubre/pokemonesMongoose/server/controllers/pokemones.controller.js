const Pokemon = require("../models/pokemones.model");

module.exports.findAllPokemones = (req,res) => {
    Pokemon.find()
        .then((allPokemones)=>res.json({pokemones:allPokemones}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.createNewPokemon = (req,res) => {
    Pokemon.create(req.body)
        .then((nuevoPokemon)=>res.json({pokemon:nuevoPokemon}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.findOnePokemon = (req,res) => {
    Pokemon.findOne({_id: req.params.id})
        .then((pokemon)=>res.json({pokemon:pokemon}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.updatePokemon = (req,res) => {
    Pokemon.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(pokemon => res.json({pokemonEditado:pokemon}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.deletePokemon = (req,res) => {
    Pokemon.deleteOne({_id:req.params.id})
        .then(result=>res.json({resultado:result}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))

}