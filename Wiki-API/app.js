const express=require('express');
const ejs=require('ejs');
const bp=require('body-parser');
const mongoose=require('mongoose');


const app=express();
app.set('view engine','ejs');

app.use(bp.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect()

app.listen(4000,()=>{
    console.log(`Listing on port 4000`);
})