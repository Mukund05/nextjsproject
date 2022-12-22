const Product=require("../models/product");

const getMyproduct = async (req,res)=>{
    const {company,name,featured,sort,select}=req.query;
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
    if(select){
        // let selectFix=select.replace(","," ");  //code brust when query for 3 param :name price,company can't able to remove from last
        let selectFix=select.split(",").join(" ");
        // console.log(selectFix);
        apiData=apiData.select(selectFix);
    }

    //pagination
    let page=Number(req.query.page) || 1;       //requested page no. else default 1st page 
    let limit=Number(req.query.limit) || 3;     //limit in every page or dafault 3 limit

    let skip=(page-1)*limit;        //skip count for every page how many skip of previous element required

    apiData=apiData.skip(skip).limit(limit);    //

    const list=await apiData;
    res.status(200).json({list});
}
const getMyproductToTest = async (req,res)=>{
    res.status(200).json({msg : "fetch all products for Testing."});
}
 module.exports={getMyproduct,getMyproductToTest};