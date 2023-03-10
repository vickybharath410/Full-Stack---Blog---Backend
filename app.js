const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const userRouter = require("./router/user")
const blogRouter = require("./router/blog")
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use("/api/user",userRouter)
app.use("/api/blogs",blogRouter)

app.get('/',(req,res)=>{
    res.send('Backend Connected')
})
mongoose.connect("mongodb+srv://blog:blog@cluster0.lu75gd5.mongodb.net/?retryWrites=true&w=majority")
    .then((res)=>console.log('database connected'))
    .catch((err)=>console.log(err.message))

app.listen(4000,()=>console.log("Server Started"))