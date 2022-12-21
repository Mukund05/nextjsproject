const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitdb");

const fruitscheme=new mongoose.Schema({
    name:String,
    rating: Number,
    review: String
});

const Fruit=new mongoose.model("Fruit",fruitscheme);

const fruit=new Fruit({
    name:"Apple",
    rating:8,
    review:"it was delicious"
});

const banana=new Fruit({
    name:"Banana",
    rating:6,
    review:"nice product"
});

const kiwi=new Fruit({
    name:"Kiwi",
    rating:7,
    review:"not bad"
});

// Fruit.insertMany([banana,kiwi],function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("success");
//     }
// })

// fruit.save();

const peoplescheme=new mongoose.Schema({
    name:String,
    age:Number
});

// const people=new mongoose.model("people",peoplescheme);

// const person=new people({
//     name:"Mukund",
//     age: 22
// });
// person.save();

Fruit.find(function(err,fruit){
    if(err){
        console.log(err);
    }else{
        // console.log(fruit);
        fruit.forEach(function(fru){
            console.log(fru.name);
        });
    }
});

// Fruit.updateOne({_id:"630f7964c82b1f2f5518bb36"},{name:"kiwiwi"},function(err){
//     if(err){ console.log(err)}else{ console.log("updated")};
//     
// });

// Fruit.deleteOne({name:"kiwiwi"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted");
//         mongoose.connection.close();
//     }
// })
