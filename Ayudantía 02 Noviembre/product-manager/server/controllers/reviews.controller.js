const {Review} = require("../models/review.model")
const Product = require("../models/product.model")

module.exports.createReview = async(req,res)=>{
    try{
        const {rating,content,idProduct} = req.body;
        const review = await Review.create({rating,content,creatorName:"Nombre del usuario loggueado"});
        const product = await Product.findById(idProduct).exec();
        product.reviews.push(review);
        await product.save();
        res.json(review);
    }
    catch(err){
        res.json(err)
    }
}

module.exports.getReviewsFromProduct = async(req,res)=>{
    try{
        const {idProduct} = req.params;
        const product = await Product.findById(idProduct).populate("reviews").exec();
        console.log("REVIEWS DEL PRODUCT",product.reviews);
        res.json({message:"",reviews:product.reviews})
    }catch(err){
        res.json({message:"Algo salio mal",errors:err.errors})
    }
}