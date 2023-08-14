require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')


const bodyParser = require('body-parser')
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
db = mongoose.connection

db.on('error', (e) => { console.log(e); })
db.once('connected', () => { console.log('DB Connected'); })
const app = express()
app.use(bodyParser.json())

//Cors
const cors = require('cors')
app.use(cors())

app.use(
    bodyParser.urlencoded(
        { extended: true }
    )
)
const routes = require('./routes/routes')
app.use('/api', routes)

app.listen(4000, () => {
    console.log("Listening On Port " + 4000)
})
