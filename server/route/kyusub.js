const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

const path = require('path');


const db = new sqlite3.Database(path.resolve(__dirname, "../crawling/dbData/data.db"));
const eventDb = new sqlite3.Database(path.resolve(__dirname, "../crawling/dbData/event.db"))

router.use(express.json());


router.post('/getdata/po', function (req, res){
    db.all(`SELECT * FROM cham WHERE line='${req.body.info.line}' AND tier='${req.body.info.tier}'`,(err, rows)=>{
        if(err){
            res.status(400).send(err.message);
        }
        else{
            res.json(rows);
        }
    });

});

router.post('/getdata/event', function(req, res){
    eventDb.all(`SELECT * FROM event WHERE month='${req.body.info.month}'`,(err, rows)=>{
        if(err){
            res.status(400).send(err.message);
            console.log('ㅈ됐노');
        }
        else{
            res.json(rows);
        }
    })
});


module.exports = router;
