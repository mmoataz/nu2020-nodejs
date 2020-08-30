const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send("Publishers homepage!");
})



module.exports=router