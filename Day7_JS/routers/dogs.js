const express = require('express');
const router = express.Router();
const app = express();

router.get('/',function(req,res){
    res.send("dogs homepage!");
})

router.get('/about',function(req,res){
    res.send("About dogs:");
})

module.exports=router