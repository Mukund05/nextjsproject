const Product=require("../models/product");

const getMyproduct = async (req,res)=>{
    const {company,name,featured,sort}=req.query;
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

    let apiData=Product.find(queryobject);

    if(sort){
        let sortFix=sort.replace(","," ");
        apiData=apiData.sort(sortFix);
    }
    const list=await apiData;
    res.status(200).json({list});
}
const getMyproductToTest = async (req,res)=>{
    res.status(200).json({msg : "fetch all products for Testing."});
}
 module.exports={getMyproduct,getMyproductToTest};