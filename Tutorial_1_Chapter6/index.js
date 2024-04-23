const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost.js') 
const app = new express();

app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded()); 
// With app.set('view engine','ejs'), we tell Express to use EJS as our templating engine, 
// that any file ending in .ejs should be rendered with the EJS package.
app.set('view engine', 'ejs');
mongoose.connect('mongodb://127.0.0.1/my_database', {useNewUrlParser: true});

//app.get('/', (req, res) => {
//    res.render('index');
//});

app.get('/',async (req,res)=>{     
    const blogposts = await BlogPost.find({})      
    res.render('index',{ 
    blogposts: blogposts 
    }); 
    }) 

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.get("/posts/new", (req, res) => {
    res.render("create");
});

//app.post('/posts/store',(req,res)=>{     
   // console.log(req.body) 
    //res.redirect('/') 
    //})

app.post('/posts/store', async (req,res)=>{             
    await BlogPost.create(req.body) 
    res.redirect('/') 
})

app.listen(3000, () => {
    console.log("App listening on port 3000");
});