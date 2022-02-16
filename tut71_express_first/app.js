const express = require('express')

const app =express();
const port =80;


//serving static files 
//app.use("/static",express.static('statics))

// app.use("/s",express.static('statics'));

app.use("/s/b/c/d",express.static("statics/pdf"))
app.get("/",(req,res)=>{
  //  res.send(`<b>this is my first express app</b> `)
    res.send("<b>This is home page .. </b>")

});

app.get("/about",(req,res)=>{
    res.send("<h1>this is about page</h1> ")
});

app.post("/about",(req,res)=>{

    res.status(200).send("<h1>Sucess ! This is about page POST </h1>")
})

app.put("/save",(req,resp)=>{
resp.send("</h1>this is putting Page </h1>")

})

app.listen(port , (err)=>{
    if(err)
    console.log("eror is "+err);
    console.log(`application started on port ${port}`);
})