const PokemonController = require("./controllers/pokemones.controller")


module.exports = app => {

    app.get("/api/pokemones",PokemonController.findAllPokemones);
    app.post("/api/pokemones/new",PokemonController.createNewPokemon);
    app.get("/api/pokemones/:id",PokemonController.findOnePokemon);
    app.put("/api/pokemones/update/:id",PokemonController.updatePokemon);
    app.delete("/api/pokemones/delete/:id",PokemonController.deletePokemon);


}