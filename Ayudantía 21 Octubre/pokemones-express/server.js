const express = require("express");
const app = express();
const port = 8000;
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.listen(port,()=>console.log("Api lanzada en puerto:"+port));

app.get("/api",(req,res)=>{
    res.json({mensaje:"Hola, estas accediendo al endpoint /api de la API"})
})

let pokemones = [
    {
        id:1,
        nombre:"Pickachu",
        poder:47
    },
    {
        id:2,
        nombre:"Charizard",
        poder:55
    },
    {
        id:3,
        nombre:"Squirtle",
        poder:40
    }
];

app.get("/api/pokemones",(req,res)=>{
    res.json({pokemones:pokemones})
})

app.post("/api/pokemon/new",(req,res)=>{
    console.log("BODY DE LA SOLICITUD",req.body);
    pokemones.push(req.body);
    res.json({mensaje:"Se ha creado exitosamente el pokemon "+req.body.nombre})
})

app.get("/api/pokemon/:id",(req,res)=>{
    console.log("PARAMS EN URL",typeof req.params.id)
    //res.json({mensaje:"parametro ID: "+req.params.id})
    const pokemonSelected = pokemones.filter(pokemon=>parseInt(req.params.id) === pokemon.id);
    console.log(pokemonSelected[0])
    res.json({pokemon:pokemonSelected[0]})
})

app.delete("/api/pokemon/:id",(req,res)=>{
    const pokemonesRestantes = pokemones.filter(pokemon=>parseInt(req.params.id)!==pokemon.id)
    pokemones = pokemonesRestantes;
    res.json({pokemones:pokemones})
})

app.put("/api/pokemon/:id",(req,res)=>{
    const pokemonesAux = pokemones.map(pokemon=>parseInt(req.params.id)===pokemon.id?req.body:pokemon);
    pokemones = pokemonesAux;
    res.json({pokemones:pokemones})
})

app.get("/api/pokemon",(req,res)=>{
    res.json({queryParams:req.query})
})