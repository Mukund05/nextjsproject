const mongoose=require("mongoose");

const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be given"],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apples","google","dell","mi"],
            message: `${VALUE} is not supported`
        },
    },
});

module.exports=mongoose.model('Product',ProductSchema);