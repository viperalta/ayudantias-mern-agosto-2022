const CancionController = require("./controllers/cancion.controllers")


module.exports = app => {
    //Cancion
    app.get("/api/canciones",CancionController.findAll);
    app.post("/api/cancion/new",CancionController.create);
    app.get("/api/cancion/:id",CancionController.findOne);
    app.put("/api/cancion/:id",CancionController.update);
    app.delete("/api/cancion/:id",CancionController.delete);
}