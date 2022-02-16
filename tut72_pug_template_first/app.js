const express= require("express");
const path= require('path') ;
const { createSecurePair } = require("tls");

const app=express();


// app.set('view engine','pug');
// app.set("views","./templates");
app.set('views',path.join(__dirname,'views'));
console.log(path.join(__dirname))

app.get('/demo',(req,resp)=>{
   
     resp.render('index.pug',{title:'pug hello world',message:"hello from chetan to first pug programme.. "})
     console.log("/demo calling page renderd  ");
})
app.get("/bal",(req,resp)=>{

resp.send("home page ");
})

app.listen(8090,()=>{
    console.log("server started s.... ")
})