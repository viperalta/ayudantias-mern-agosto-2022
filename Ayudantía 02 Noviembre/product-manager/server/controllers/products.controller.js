const Product = require ("../models/product.model")
const { Review } = require("../models/review.model")

module.exports.findAll = (req,res) => {
    Product.find()
        .then((all)=>res.json({productos:all}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.create = (req,res) => {
    Product.create(req.body)
        .then((newProduct)=>res.json({message:"",product:newProduct}))
        .catch((err)=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.createProduct = async(req,res)=>{
    try{
        const {nombre,precio,rating,content} = req.body;
        const review = new Review({rating,content,creatorName:"Nombre usuario"});
        const product = new Product({nombre,precio});
        product.reviews.push(review);
        await product.save();
        await review.save();
        res.json({message:"",product:product,review:review})
    }
    catch(err){
        res.json({message:"Algo salio mal",errors:err.errors})
    }
}

module.exports.findOne = (req,res) => {
    Product.findOne({_id: req.params.id})
        .then((product)=>res.json({product:product}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.update = (req,res) => {
    Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then((product)=>res.json({product:product}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.delete = (req,res) => {
    Product.deleteOne({_id: req.params.id})
        .then((result)=>res.json({resultado:result}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

