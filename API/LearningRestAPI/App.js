const express=require("express");
const app=express();
const connectDB=require("./db/connect");

require("dotenv").config();

const product_route=require("./routes/products");

const PORT=process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("Hii I am Alive");
})

app.use("/api/product",product_route);

const start=async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`Successfully live on ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();