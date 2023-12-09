const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

const path= require('path');

const db = new sqlite3.Database(path.resolve(__dirname, "../crawling/dbData/champions.db"));
const db2 = new sqlite3.Database(path.resolve(__dirname, "../crawling/dbData/championsDetails.db"));

router.use(express.urlencoded({ extended: true }));

router.use(express.json());

router.get('/getdata', function (req, res){
    db.all(`SELECT * FROM champions WHERE line='top' AND tier='Emerald'`,(err, rows)=>{
        if(err){
            res.status(500).send(err.message);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/getdata/po', function (req, res){
    db.all(`SELECT * FROM champions WHERE line='${req.body.info.line}' AND tier='${req.body.info.tier}' AND version='${req.body.info.ver}'`,(err, rows)=>{
        if(err){
            res.status(400).send(err.message);
        }
        else{
            res.json(rows);
        }
    });

});

router.post('/getdata2/po', function (req, res){
    db2.all(`SELECT * FROM '${req.body.id}'`,(err, rows)=>{
        if(err){
            res.status(400).send(err.message);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports = router;