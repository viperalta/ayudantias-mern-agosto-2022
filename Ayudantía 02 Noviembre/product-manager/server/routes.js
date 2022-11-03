const ProductController = require("../server/controllers/products.controller")
const ReviewController = require("../server/controllers/reviews.controller")

module.exports = app => {

    //PRODUCTS
    app.get("/api/products",ProductController.findAll);
    app.post("/api/products/new",ProductController.createProduct);
    app.get("/api/products/:id",ProductController.findOne);
    app.put("/api/products/update/:id",ProductController.update);
    app.delete("/api/products/delete/:id",ProductController.delete);

    //REVIEWS
    app.post("/api/reviews/new",ReviewController.createReview);
    app.get("/api/reviews/:idProduct",ReviewController.getReviewsFromProduct);

}