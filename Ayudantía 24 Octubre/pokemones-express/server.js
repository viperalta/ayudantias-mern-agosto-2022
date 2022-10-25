const express = require("express");
const app = express();
const port = 8000;
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.listen(port,()=>console.log("Api lanzada en puerto:"+port));

const routes = require("./server/routes");
routes(app);