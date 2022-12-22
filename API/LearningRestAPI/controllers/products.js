const Product=require("../models/product");

const getMyproduct = async (req,res)=>{
    const {company,name,featured}=req.query;
    const queryobject={};

    if(company){
        queryobject.company=company;
    }
    if(name){
        queryobject.name={$regex:name,$options:"i"};
    }
    if(featured){
        queryobject.featured=featured;
    }
    const list=await Product.find(queryobject);
    res.status(200).json({list});
}
const getMyproductToTest = async (req,res)=>{
    res.status(200).json({msg : "fetch all products for Testing."});
}
 module.exports={getMyproduct,getMyproductToTest};