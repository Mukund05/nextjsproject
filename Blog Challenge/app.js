const express=require('express');
const ejs=require('ejs');
const bodyparser=require('body-parser');
const path=require('path');
const lodash=require('lodash');

const app=express();
app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

const port=process.env.PORT || 4000;


const homecontent="Welcome Visitors! Thank you so much for coming here. It's my blog website which is created by my own using node, express and ejs. It took some times but although it's a great start for me. If you love these website i feel glad and if anything which doesn't look good you can suggest me via visiting contact page.Thanks for visiting.";
const aboutcontent="Hii. I am Mukund Thakur a passionated Software and Web Developer who loves to explore new technology .Currently i am having experience in Html, css, Javascript,Bootstarp, ReactJs, NodeJs, ExpressJs, MongoDB, SQL, EJS and many more i am thinking to explore cyber security field in future.Technology is best when it's bring people together.";
const contactcontent="To contact me you can drop a mail on mukundjha193@gmail.com .it takes me sometime to revert you back. Thanks for visiting these pages hope you like it.";

const posts=[];

app.get('/',(req,res)=>{
    res.render('home',{home:homecontent,arr:posts});
    
});

app.get('/posts/:query',(req,res)=>{
    // console.log(req.params.query);
    const q=lodash.lowerCase(req.params.query);

    posts.find(element=>{
        const requrl=lodash.lowerCase(element.title);
        if(requrl===q){
            res.render('posts',{title: element.title,des:element.content});
        }
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{about:aboutcontent});
    
});


app.get('/contact',(req,res)=>{
    res.render('contact',{contact:contactcontent});
});

app.get('/compose',(req,res)=>{
    res.render('compose');
});

app.post('/compose',(req,res)=>{
    const post={
        title:req.body.postTitle,
        content: req.body.postBody
    };
    posts.push(post);
    res.redirect('/');
});

app.listen(port,(req,res)=>{
    console.log(`App is listening successfully on port ${port}`);
});