require("dotenv").config();
const connectdb=require("./db/connect");
const model=require("./models/product");

const productlist=require("./products.json");

const start = async ()=>{
    try {
        await connectdb(process.env.MONGODB_URL);
        await model.deleteMany();
        await model.create(productlist);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}


start();