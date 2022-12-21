const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose=require('mongoose');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");

const ItemSchema={
  name:String
};

const Item=mongoose.model("Item",ItemSchema);

const item1=new Item({
  name:"welcome here....!"
});

const item2=new Item({
  name:"Hit + button to add in the list."
});

const item3=new Item({
  name:"Rate my project as you like it."
});


const defaultItem=[item1,item2,item3];

Item.insertMany(defaultItem,function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Item added successfully.....");
  }
});

app.get("/", function(req, res) {

const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){
  console.log("success");
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(4000, function() {
  console.log("Server started on port 3000");
});
