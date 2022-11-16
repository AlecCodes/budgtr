require("dotenv").config();
const express = require('express')
const app = express();
const PORT = process.env.PORT;
const Budget = require('./models/budget')
const morgan = require('morgan')



////////////////////////////////////////////?
//Middleware
////////////////////////////////////////////?
app.use("/static", express.static("public"))
app.use(morgan('tiny'))
app.use(express.urlencoded({extended:true})) //parse data from form submission


//Index route
app.get("/budgets/", (req,res) => {
    res.render("index.ejs",{Budget:Budget})
})

//NEW route
app.get("/budgets/new", (req,res) =>{
    res.render("new.ejs")
})

//CREATE route
app.post("/budgets/", (req,res) =>{
    Budget.push(req.body)
    res.redirect("/budgets/")
})

//Show route for individual purchases
app.get("/budgets/:id", (req,res) => {
    res.render("show.ejs",{purchase:Budget[req.params.id]})
})


//listeners
app.listen(PORT, ()=>console.log(`Its go time! listening on ${PORT}`) )