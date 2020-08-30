const express = require('express');
const router = express.Router();
const Joi = require('joi');
const schema = Joi.object({ 
    name: Joi.string().alphanum().min(3).max(30).required(),
    age: Joi.number() 
  });

router.get('/',function(req,res){
    res.send("Birds homepage!");
})

router.get('/about',function(req,res){
    res.send("About birds:");
})

router.get('/welcome',function(req,res){
    const result = schema.validate(req.body);
    if(result.error){
        return res.status(400).send("parameter name is missing or invalid");
    }
    res.send('welcome ' + req.body.name);
})

module.exports=router