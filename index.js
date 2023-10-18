const express = require("express")
const app = express()
const mongoose = require("mongoose")

const route = require("./route")
const mult = require('multer')


app.use(mult().any())
app.use(express.json())

mongoose.connect("mongodb+srv://ankitdb:ankit321@cluster0.nz06g9j.mongodb.net/bikerent-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(()=>console.log("MongoDB is connected"))
.catch((err)=> console.log(err))

app.use("/", route)
app.listen(3000,function(){
    console.log("port is running on 3000")
})