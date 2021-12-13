const express = require("express");
const app = express();
const getD = require("./connectMongo.js");

app.get("/",(req,res)=>
{
    res.send("first request!!");
});

app.get("/api",async(req,res)=>
{
    let temp =await getD.getData();
    res.send(temp);
 
});


app.listen(3000,() => {
    console.log("Listeneing to 3000");
});