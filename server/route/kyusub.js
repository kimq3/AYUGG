const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

const file = require('fs');
const path = require('path');


const db = new sqlite3.Database(path.resolve(__dirname, "../crawling/dbData/data.db"));

router.use(express.json());

router.get('/getdata', function (req, res){
    db.all(`SELECT * FROM cham WHERE line='all' AND tier='plattinum'`,(err, rows)=>{
        if(err){
            res.status(500).send(err.message);
        }
        else{
            res.json(rows);
        }
    });

});

router.post('/getdata/po', function (req, res){
    // console.log('라인: ',req.body.info.line);
    // console.log('티어: ',req.body.info.tier);
    db.all(`SELECT * FROM cham WHERE line='${req.body.info.line}' AND tier='${req.body.info.tier}'`,(err, rows)=>{
        if(err){
            res.status(400).send(err.message);
        }
        else{
            res.json(rows);
        }
    });

});


module.exports = router;
