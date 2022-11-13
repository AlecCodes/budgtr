require("dotenv").config();
const express = require('express')
const app = express();
const PORT = process.env.PORT;


//Index route
app.get("/budgets", (req,res) => {
    res.send('INDEX PAGE')
})



//listeners
app.listen(PORT, ()=>console.log(`Its go time! listening on ${PORT}`) )