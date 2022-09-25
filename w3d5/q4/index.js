const express = require('express');
const path=require('path');
const app = express();
app.use(express.urlencoded({extended:false}));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'view'));

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
   if (!name) {
    name = "person";
   }
   if (!age) {
    age=0;
   }
   res.redirect(`/output?name=${name}&age=${age}`);
});


app.get('/output',(req,res)=>{
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
     name = "person";
    }
    if (!age) {
     age=0;
    }
    res.send(`Welcome ${name} Age: ${age}`);
 });
app.listen(3000,()=>{console.log('server running');});