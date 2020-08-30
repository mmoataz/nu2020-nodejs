const express = require('express');
const router = express.Router();
const app = express();

router.get('/',function(req,res){
    res.send("elephants homepage!");
})

router.get('/about',function(req,res){
    res.send("About elephants:");
})

module.exports=router