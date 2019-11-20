
// declare a bunch of const 
//express const is for express server
const express = require("express")
//body parser is for parse the req body(form)
const bodyParser = require("body-parser")
//ejs is embeded javascript
const ejs = require("ejs")
//date is our module
const date = require(__dirname+"/date.js")
const port = 3000

//declare a bunch of variable
let items = ["buy a food","prepare a food","eat a food"]
let workItems = ["item a","item b","item c"]
let day = date.getDay();

const app = express()
//set our ejs
app.set("view engine","ejs")

//use our middleware such as body parser and express static for public route
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))


app.get("/",(req,res)=>{
    
    res.render("index",{
        title:"Todo List",
        thisDay:day,
        newItems:items,
        listName:""
    })
})

app.post("/",(req,res)=>{
    let item = req.body.newItem
    if (req.body.list === "work") {
        workItems.push(item)
        res.redirect("/work")
    }else
    {
        items.push(item)
        res.redirect("/")
    }
})

app.get("/work",(req,res)=>{
    res.render("index",{
        title: "To do Work",
        newItems:workItems,
        thisDay:day,
        listName:"work"
    })
})

app.post("work",(req,res)=>{
    // workItems.push(item)
    // res.redirect("/work")
})

app.get("/about",(req,res)=>{
    res.render("about",{title:"about"})
})


app.listen(port,()=>console.log("server is running at "+port))