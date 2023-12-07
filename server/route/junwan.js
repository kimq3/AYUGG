const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

const fs = require('fs');
const path= require('path');

const db = new sqlite3.Database(path.resolve(__dirname, "../crawling/dbData/champions.db"));
const db2 = new sqlite3.Database(path.resolve(__dirname, "../crawling/dbData/championsDetails.db"));

let rawdata = fs.readFileSync(path.resolve(__dirname,"../jsonData/garen.json")); //json 경로의 이동에 의해 path 라이브러리 활용

let champData = JSON.parse(rawdata);

router.use(express.urlencoded({ extended: true }));

router.get("/garen", (req, res) => {
    res.json({ champData });
});

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

router.get('/getdata2', function (req, res){
    db2.all(`SELECT * FROM garen`,(err, rows)=>{
        if(err){
            res.status(500).send(err.message);
        }
        else{
            res.json(rows);
        }
    });

});

// router.post('/getdata/po', function (req, res){
//     console.log('라인: ',req.body.info.line);
//     console.log('티어: ',req.body.info.tier);
//     console.log('버전: ',req.body.info.ver);
//     db.all(`SELECT * FROM champions WHERE line='${req.body.info.line}' AND tier='${req.body.info.tier}' AND version='${req.body.info.ver}'`,(err, rows)=>{
//         if(err){
//             res.status(400).send(err.message);
//         }
//         else{
//             res.json(rows);
//         }
//     });
// });

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