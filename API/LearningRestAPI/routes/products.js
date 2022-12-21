const express =require("express");
const router=express.Router();

const {getMyproduct,getMyproductToTest}=require("../controllers/products");

router.route("/").get(getMyproduct);
router.route("/Test").get(getMyproductToTest);

module.exports=router;