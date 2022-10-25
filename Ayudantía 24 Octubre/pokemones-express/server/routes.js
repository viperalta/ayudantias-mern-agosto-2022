const {getAllPokemones, createPokemon, getPokemon, deletePokemon, editPokemon, queryPokemon,promedioPoder, promedio, darElixir, atacar} = require ("./controllers/pokemonController")

module.exports = (app) => {

    /*  app.get("/api",(req,res)=>{
        res.json({mensaje:"Hola, estas accediendo al endpoint /api de la API"})
    }) */
    app.get("/api/pokemones",getAllPokemones);
    app.post("/api/pokemon/new",createPokemon)
    app.get("/api/pokemon/:id",getPokemon);
    app.delete("/api/pokemon/:id",deletePokemon)
    app.put("/api/pokemon/:id",editPokemon)
    app.get("/api/pokemon",queryPokemon)
    app.get("/api/promedio-poder",promedioPoder)
    app.get("/api/promedio",promedio)
    app.put("/api/dar-elixir",darElixir)
    app.put("/api/atacar",atacar)

}