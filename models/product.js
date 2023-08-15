const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    videoID:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
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
        type:Number
    },  
    productImageURL:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('Product',productSchema)