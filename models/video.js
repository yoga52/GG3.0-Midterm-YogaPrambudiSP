const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    videoID:{
        required: true,
        type: String
    },
    thumbnailURL:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('Video',videoSchema)