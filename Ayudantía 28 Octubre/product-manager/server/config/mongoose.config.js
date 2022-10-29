const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productsdbayudantia2", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("BASES DE DATOS OPERACIONAL"))
	.catch(err => console.log("Algo salió mal", err));