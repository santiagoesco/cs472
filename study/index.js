const express=require('express');
const app =express();

const duck=require('./duck');

app.get('/',(req,res)=>{
    //res.send('Hello!');
    let d=new duck(false,false,0,1);
    res.send('Hello!' + d.duckStatus());
    console.log(d.duckStatus());
    //res.render('form');
});

app.get('/duck',(req,res)=>{

});

app.listen(3000,()=>{
    console.log("Server running");
});

