const express = require('express');
const { parse } = require('path');
const app = express();

app.use(express.json());

let books = [
    {isbn:1234, title:"Programming", publisher:"Hussien"},
    {isbn:4569, title:"Java", publisher:"Mahmoud"},
    {isbn:4567, title:"Web", publisher:"Hussam"},
    {isbn:3698, title:"Computer", publisher:"Mohab"},
    {isbn:2587, title:"AI", publisher:"Bill"}
];

app.get('/',function(req,res){
    res.json(books);
})

app.get('/books',function(req,res){
    res.json(books);
})

app.get('/books/:isbn',function(req,res){
    const id = parseInt(req.params.isbn);
    const book = books.find(b => b.isbn===id);
    res.send(book);
})

app.post('/books',function(req,res){
    const book = {isbn:req.body.isbn, title:req.body.title, publisher:req.body.publisher};
    books.push(book);
    res.json(books);
})
app.delete('/books/:isbn',function(req,res){
    const book = books.find(b=>b.isbn===parseInt(req.params.isbn));
    const i = books.indexOf(book);
    books.splice(i,1);
    res.json(books);
})

app.put('/books/:isbn',function(req,res){
    let id = parseInt(req.params.isbn);
    const book = books.find(b => b.isbn === id);
    const i = books.indexOf(book);
    books[i].title= req.body.title;
    books[i].publisher= req.body.publisher;
    res.send(book);
})
app.listen(8000);
