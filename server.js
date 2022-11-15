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

//Show route for individual expenses
app.get("/budgets/show/:id", (req,res) => {
    res.render("show.ejs",{purchase:Budget[req.params.id]})
})

//listeners
app.listen(PORT, ()=>console.log(`Its go time! listening on ${PORT}`) )