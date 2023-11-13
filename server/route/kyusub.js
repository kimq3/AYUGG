const express = require('express');
const router = express.Router();

const file=require('fs');
const path= require('path');

const data=file.readFileSync(path.resolve(__dirname,"../jsonData/data.json"));
let realdata=JSON.parse(data);

router.use(express.json());

router.get('/getdata', function (req, res){
    res.json(realdata);
});


module.exports = router;
