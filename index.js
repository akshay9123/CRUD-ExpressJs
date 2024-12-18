const express = require('express')
const app = express();

// load config from env

require('dotenv').config();

const PORT = process.env.PORT || 4000;

// middleware to parse  the json request

app.use(express.json())

//import routes for TODO api
const todoRoutes = require('./routes/todo')

// mount the todoAPI
app.use("/api/v1", todoRoutes);

// start server 
app.listen(PORT,()=>{
    console.log(`server is started at port number ${PORT}`)
})

// db connection
const dbConnect  = require("./config/database")
dbConnect();

// default route
app.get('/',(req,res)=>{
    res.send(`<h1>This is HOME page baby</h1>`)
})