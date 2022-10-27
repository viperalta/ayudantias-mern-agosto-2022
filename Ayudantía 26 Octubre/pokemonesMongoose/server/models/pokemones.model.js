const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
    nombre:String,
    poder:Number,
    salud:Number
})

const Pokemon = mongoose.model("Pokemon",PokemonSchema)

module.exports = Pokemon;