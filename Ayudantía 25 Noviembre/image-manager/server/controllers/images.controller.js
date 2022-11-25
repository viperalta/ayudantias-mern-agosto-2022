const {Image} = require ("../models/image.model")

const {uploadFile, getFileStream} = require("../../s3");

module.exports.findAll = (req,res) => {
    Image.find()
        .then((all)=>res.json({images:all}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.create = async(req,res)=>{
    try{
        console.log("Se ha llamado a la creacion de la imagen")
        const file = req.file;
        const result = await uploadFile(file);
        console.log("Respuesta de amazon",result);
        console.log("El archivo en el back", file);
        const image = new Image({description:req.body.description,filePath:result.Key})
        await image.save();
        res.header("Access-Control-Allow-Origin", "*");
        res.send({message:""})
    }catch(err){
        res.json({message:"Algo salio mal",errors:err.errors})
    }
}

module.exports.getImage = (req,res)=>{
    const key = req.params.key;
    const readStream = getFileStream(key)
    readStream.pipe(res)
}