const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    username:{
        required: true,
        type: String
    },
    videoID:{
        required: true,
        type: String
    },
    comment:{
        required:true,
        type:String
    },
    timestamp:{
        required:true,
        type:Date
    }
})

module.exports = mongoose.model('Comment',commentSchema)