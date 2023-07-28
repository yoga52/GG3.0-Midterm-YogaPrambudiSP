const Video = require('../models/video')
const Product = require('../models/product')
const Comment = require('../models/comment')
const express = require('express')
const router = express.Router()

router.get('/videos',async (req,res)=>{
    try {
        const video = await Video.find() 
        res.status(200).json(video)
    } catch (error) {
        console.log("Entering Error");
        res.status(404).json({message:error.message})
    }
})
router.get('/products/:id',async (req,res)=>{
    try {
        const product = await Product.find({videoID:req.params.id}).exec()
        res.status(200).json(product)
    } catch (error) {
        console.log("Entering Error");
        res.status(404).json({message:error.message})
    }
})
router.get('/comments/:id',async (req,res)=>{
    try {
        const comment = await Comment.find({videoID:req.params.id}).exec()
        res.json(comment)
    } catch (error) {
        console.log("Entering Error");
        res.status(500).json({message:error.message})
    }
})
router.post('/comments/:id',async (req,res)=>{
    const comment = new Comment({
        videoID:req.params.id,
        username:req.body.username,
        comment:req.body.comment,
        timestamp:Date.now()
    })

    try {
        const commentToSave =  await comment.save()
        res.status(200).json("Success")
    } catch (error) {
        res.status(400).json({message: error.message})
    }


})

module.exports = router