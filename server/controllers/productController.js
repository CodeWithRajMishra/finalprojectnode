const ProductModel= require("../models/productModel");

const brandDisplay=async(req, res)=>{
   const product=await ProductModel.find();
   res.send(product); 
}

module.exports = {
     brandDisplay
}