const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    store:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store"
    },
    views:{
        required:true,
        type:Number
    },
    thumbnailURL: {
        required: false,
        type: String
    },
    videoURL: {
        required: true,
        type: String
    },
    timestamp: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('Video', videoSchema)