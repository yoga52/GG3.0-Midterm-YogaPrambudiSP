require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
db = mongoose.connection

db.on('error',(e)=>{
    console.log(e);
})
db.once('connected',()=>{
    console.log('DB Connected');
})

const app = express()
app.use(express.json())



app.listen(3000,()=>{console.log("Listening On Port "+3000);});
