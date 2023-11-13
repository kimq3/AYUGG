const express = require('express');
const app = express();
const cors = require('cors');

const PORT=8100;

app.use(express.json());
app.use(cors());

const appRouter=require("./route/kyusub");
const app2Router=require("./route/junwan");


app.listen(PORT, ()=>{
    console.log("server start.., address: http://localhost:"+PORT+"/");
});

app.use("/kim", appRouter);
app.use("/park", app2Router);

