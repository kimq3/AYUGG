const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

const file = require('fs');
const path = require('path');


const db = new sqlite3.Database(path.resolve(__dirname, "../crawling/dbData/data.db"));

router.use(express.json());

router.get('/getdata', function (req, res){
    db.all('SELECT * FROM cham',(err, rows)=>{
        if(err){
            res.status(500).send(err.message);
        }
        else{
            res.json(rows);
        }
    });

});


module.exports = router;
