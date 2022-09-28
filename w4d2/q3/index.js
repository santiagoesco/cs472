const express=require('express');
const path=require('path');
const cookieParser=require('cookie-parser');
const app=express();

app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));


app.get('/',(req,res)=>{
    res.render('form');
});

let cookiesArr=[];
app.post('/',(req,res)=>{

    let key=req.body.key;
    let value=req.body.value;

    res.cookie(key,value);

   // res.clearCookie('ai_user');
    //res.clearCookie('ASP.NET_SessionId');

    for(key in req.cookies){
        cookiesArr.push({key:key,value:value});
        console.log(key);
        //res.clearCookie(key);
        console.log(req.cookies[key]);
        //req.session.destroy();
    }

    console.log('Cookies: ', req.cookies)
    res.render('principal',{cookiesArr});

});

app.listen(3000,()=>{console.log('server running');});