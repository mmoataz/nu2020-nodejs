const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());
var dogs = require('./routers/dogs');
var elephants = require('./routers/elephants');
var birds = require('./routers/birds');

app.use('/birds',birds)
app.use('/dogs',dogs)
app.use('/elephants',elephants)

app.listen(3000);
