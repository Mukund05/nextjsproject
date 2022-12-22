const Product=require("../models/product");
const getMyproduct = async (req,res)=>{
    const list=await Product.find({});
    res.status(200).json({list});
}
const getMyproductToTest = async (req,res)=>{
    res.status(200).json({msg : "fetch all products for Testing."});
}
 module.exports={getMyproduct,getMyproductToTest};