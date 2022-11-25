const ImageController = require("../server/controllers/images.controller")

const multer = require('multer');
const upload = multer({dest:'uploads/'})

module.exports = app => {
    app.post("/api/image/new", upload.single("image") ,ImageController.create);
    app.get("/api/images",ImageController.findAll)
    app.get("/images/:key",ImageController.getImage);
}