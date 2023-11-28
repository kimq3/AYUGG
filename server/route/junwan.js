const express = require('express');
const router = express.Router();

const fs = require('fs');
const path= require('path');

let rawdata = fs.readFileSync(path.resolve(__dirname,"../jsonData/garen.json")); //json 경로의 이동에 의해 path 라이브러리 활용

let champData = JSON.parse(rawdata);

router.use(express.urlencoded({ extended: true }));

router.get("/garen", (req, res) => {
    res.json({ champData });
});



module.exports = router;