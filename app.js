const express=require('express');

//express app
const app=express();

//register view engine
app.set('view engine','ejs');

//listen for requests
app.listen(5000);

app.get('/',(req,res)=>{
    //res.send('<p>home page</p>');
    res.render('index');
});
app.get('/about',(req,res)=>{
    
    res.send('<h1>give me</h1>');
});

//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

//redirects
app.use((req,res)=>{
    
    res.status(404).render('404');
});
