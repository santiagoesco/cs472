const express=require('express');
const app=express();

app.listen(3000,()=>{
    console.log("Server running");
});

app.get("/Bazinga",(req,res)=>{

    res.send("Welcome to my home");
});

app.use((req,res)=>{
res.send("BANANA!")

});

