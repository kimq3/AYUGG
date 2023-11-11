const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

let rawdata = fs.readFileSync('championData.json');
let champData = JSON.parse(rawdata);

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/garen", (req, res) => {
  res.json({ champData });
});

app.listen(8100, () => {
  console.log(`Example app listening on port 8100`);
});
