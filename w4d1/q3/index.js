const express = require('express');
const path=require('path');
const app = express();
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

var session = require('express-session');
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.get('/', (req, res) => {

    console.log(res.session);
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

    req.session.products=products;

    console.log(req.session.products);

    console.log(checkIfExist(product1,products));


    res.render('cart',{
        products:products
    });

});

function checkIfExist(product,products){

    for(p in products){
        console.log(products[p]);
        if(products[p].id==product.id){
            return true;

        }
    }
    return false;

}

app.listen(3000,()=>{console.log('server running');});