const express = require ('express');
const app = express();

app.use(express.json())

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});
// Create a new element
const Product = mongoose.model("Product",productSchema);
app.post('/products',function(req,res){
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });

  product
    .save()
    .then(result => {
      // console.log(result);
      res.send(product);
    })
    .catch(err => {
      console.log(err);
    });
  })
// get all elements
app.get('/products',function(req,res){
    Product.find()
    .exec()
    .then(prod => {
      // for (var i=0; i<prod.length; i++){
      //   console.log(prod[i]);
      // }
      res.json(prod);
    })
    .catch(err => {
      console.log(err);
    });
})
// get element by id
app.get('/products/:id',function(req,res){
  const id =req.params.id;
  Product.findById(id)
    .exec()
    .then(prod=>{
      res.status(200).json(prod);
  })
  .catch(err => {
    console.log(err);
  });
})
// Delete element
app.delete('/products/:id',function(req,res){
  const id = req.params.id;
  Product.findByIdAndRemove(id)
  .exec()
  .then(prod=>{
      res.json(prod);
  })
  .catch(err => {
    console.log(err);
  });
})

app.put('/products/:id',function(req,res){
  const id =req.params.id;
  Product.findById(id)
    .exec()
    .then(prod=>{
      prod.name=req.body.name;
      prod.price=req.body.price;
      res.status(200).json(prod);
  })
  .catch(err => {
    console.log(err);
  });
})
app.listen(8000);
