const express = require("express");
const app = express();
const cors=require('cors');//nuevo
app.use(cors());//nuevo

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/routes")(app);

app.listen(8000, () => console.log("SERVIDOR INICIADO"));