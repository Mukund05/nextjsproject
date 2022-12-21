const mongoos=require("mongoose");
mongoos.set("strictQuery", false);


const connectDB= (uri)=>{
    return mongoos.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
};

module.exports=connectDB;