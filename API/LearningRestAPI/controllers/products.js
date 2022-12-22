const Product=require("../models/product");
const getMyproduct = async (req,res)=>{
    // console.log(req.query);
    const list=await Product.find(req.query);
    res.status(200).json({list});
}
const getMyproductToTest = async (req,res)=>{
    res.status(200).json({msg : "fetch all products for Testing."});
}
 module.exports={getMyproduct,getMyproductToTest};