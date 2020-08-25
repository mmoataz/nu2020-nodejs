const express = require ('express');
const app = express();

app.use(express.json())

let products = [
    {id:1, name:"Noodles",price:10.5},
    {id:2, name:"Milk",price:20.5},
    {id:3, name:"Egg",price:1.5},
    {id:4, name:"Rice",price:10.5},
    {id:5, name:"Pepsi",price:5.0}
];

app.get('/', function(req,res){
    res.send('hello world');
})
const productbaseurl="/products";
app.get(productbaseurl,function(req,res){
    res.json(products);
})

app.post(productbaseurl,function(req,res){
    const product = {
        id:products.length+1,
        name:req.body.name,
        price:req.body.price
    };
    products.push(product);
    res.json(products);
})

app.get(productbaseurl+'/:id',function(req,res){
    let ids = parseInt(req.params.id)
    const product1 = products.find(p => p.id === ids);
    res.send(product1);
})

app.delete(productbaseurl+'/:id',function(req,res){
    let ids = parseInt(req.params.id)
    const product1 = products.find(p => p.id === ids);
    const index = products.indexOf(product1);
    products.splice(index,1);
    res.json(products);
})

app.put(productbaseurl+'/:id',function(req,res){
    let ids = parseInt(req.params.id);
    const i = products.indexOf(products.find(p=>p.id===ids));
    products[i].name = req.body.name;
    products[i].price = req.body.price;
    res.send(products[i]);
})

app.listen(3000);
