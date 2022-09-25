const express = require('express');
const path=require('path');
const app = express();
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
res.render('form');

 //res.sendFile(path.join(__dirname,'form.html'));
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
   //res.send(`Welcome ${name} Age: ${age}`);
   res.render('result',{
      name:name,
      age:age
   })
});
app.listen(3000,()=>{console.log('server running');});