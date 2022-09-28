
const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));
app.use(express.json());


const answers=[ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.get('/',(req,res)=>{
    res.render('index');
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/ball',(req,res)=>{
    console.log('Requested');
    res.send(answers[getRandomInt(0,answers.length-1)]);
});
app.listen(3000,()=>{
    console.log('App running');
});