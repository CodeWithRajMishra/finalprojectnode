const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    city:Number,
    shippingadd:String,
    pincode:Number,
    alternate:String
})

module.exports = mongoose.model("user", userSchema);