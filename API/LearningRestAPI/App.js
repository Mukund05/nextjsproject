const express=require("express");
const app=express();

const PORT=process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("Hii I am Alive");
})

const start=async ()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`Successfully live on ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();