const mongoos=require("mongoose");

const uri="mongodb+srv://mukund:Mm9711755071@testingapi.mbpmanh.mongodb.net/TestingAPI?retryWrites=true&w=majority";
mongoos.set("strictQuery", false);
const connectDB= ()=>{
    return mongoos.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
};

module.exports=connectDB;