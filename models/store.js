const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('Store',storeSchema)