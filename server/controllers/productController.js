const ProductModel= require("../models/productModel");

const brandDisplay=async(req, res)=>{
   const product=await ProductModel.find();
   res.send(product); 
}

const userRegistration=async(req, res)=>{
    const product = await 
}


module.exports = {
     brandDisplay,
     userRegistration
}