const getMyproduct = async (req,res)=>{
    res.status(200).json({msg : "fetch all products"});
}
const getMyproductToTest = async (req,res)=>{
    res.status(200).json({msg : "fetch all products for Testing."});
}
 module.exports={getMyproduct,getMyproductToTest};