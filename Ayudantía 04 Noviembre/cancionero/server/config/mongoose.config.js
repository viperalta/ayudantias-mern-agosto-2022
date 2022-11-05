const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/canciondb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Bse de datos lista!!!!!"))
	.catch(err => console.log("No tenemos DB", err));