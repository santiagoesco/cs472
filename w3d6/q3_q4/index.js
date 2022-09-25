const express = require('express');
const path=require('path');
const app = express();
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
res.render('mainPage');

});

app.get('/product',(req,res)=>{

    let product={
        name:"Chocolate",
        price:"$1",
        description:"Its a delicius chocolate",
        id:"CH1"
    }

    res.render('product',{
        product:product
    });

});

app.get('/cart',(req,res)=>{

    let product1={
        name:"Chocolate",
        price:"$1",
        description:"Its a delicius chocolate",
        id:"CH1"
    }

    let product2={
        name:"Lollipop",
        price:"$2",
        description:"Its a delicius strawberry lollipop",
        id:"LP1"
    }

    let product3={
        name:"Starburst",
        price:"$4",
        description:"Its a delicius chewing gum candie",
        id:"ST1"
    }

    let products=[];
    products.push(product1);
    products.push(product2);
    products.push(product3);

    res.render('cart',{
        products:products
    });

});



app.listen(3000,()=>{console.log('server running');});