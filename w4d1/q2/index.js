const express = require('express');
const path=require('path');
const app = express();
app.use(express.urlencoded({extended:false}));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'view'));

var session = require('express-session');

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.get('/', (req, res) => { 
  const date = new Date();
  const hour = date.getHours();
  console.log(hour);
  let style="";
  if (hour>=6 && hour <= 18) {
   style="day.css"
  }else{
   style="night.css"
  }
 res.render('viewForm',{style:style});
});
app.post('/result',(req,res)=>{
   let name = req.body.name;
   let age = req.body.age;

console.log(name);
   //if (!name) {
   // name = "person";
   //}
   //if (!age) {
   // age=0;
   //}
   req.session.name=name;
   req.session.age=age;
   res.redirect(`/output`);
});


app.get('/output',(req,res)=>{
   let name = req.session.name;
   let age = req.session.age;
   console.log(name);
   if (!name) {
      name = "person";
     }
     if (!age) {
      age=0;
     }
   if(req.session.name){
      //res.send(`Welcome ${} and the age is ${}`);
      res.send(`Welcome ${name} Age: ${age}`);
  }
  else{
      res.redirect('back');
  }



    
   
 });
app.listen(3000,()=>{console.log('server running');});