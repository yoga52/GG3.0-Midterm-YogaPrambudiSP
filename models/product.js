const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    videoID:{
        required: true,
        type: String
    },
    productURL:{
        required:true,
        type:String
    },
    productTitle:{
        required:true,
        type:String
    },
    productPrice:{
        required:true,
        type:String
    },  
    productImageURL:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('Product',productSchema)