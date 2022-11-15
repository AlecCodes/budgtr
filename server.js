require("dotenv").config();
const express = require('express')
const app = express();
const PORT = process.env.PORT;
const Budget = require('./models/budget')

////////////////////////////////////////////?
//Middleware
////////////////////////////////////////////?
app.use("/static", express.static("public"))


//Index route
app.get("/budgets", (req,res) => {
    res.render("index.ejs",{Budget})
})



//listeners
app.listen(PORT, ()=>console.log(`Its go time! listening on ${PORT}`) )