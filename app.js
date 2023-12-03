const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongodb-practice").then(()=>{
    console.log("Connection Successful")
})
const app = express();
app.use(express.json());
const appRoutes = require("./routes/route")

app.use('/route',appRoutes)

app.listen(3000,()=>{
    console.log("Server is running at 3000")
})