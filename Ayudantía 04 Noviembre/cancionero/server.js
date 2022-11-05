const express = require("express");
const app = express();
const cors=require('cors');//nuevo
app.use(cors());//nuevo

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/routes")(app);

app.listen(8000, () => console.log("SERVIDOR INICIADO"));