const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());
var books = require('./Routers/books');
var users = require('./Routers/users');
var publishers = require('./Routers/publishers');
var categories = require('./Routers/categories');

app.use('/books',books);
app.use('/users',users);
app.use('/publishers',publishers);
app.use('/categories',categories);

app.listen(3000);