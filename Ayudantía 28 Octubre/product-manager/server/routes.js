const ProductController = require("../server/controllers/products.controller")

module.exports = app => {

    app.get("/api/products",ProductController.findAll);
    app.post("/api/products/new",ProductController.create);
    app.get("/api/products/:id",ProductController.findOne);
    app.put("/api/products/update/:id",ProductController.update);
    app.delete("/api/products/delete/:id",ProductController.delete);

}