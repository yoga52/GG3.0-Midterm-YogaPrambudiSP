const Video = require('../models/video')
const Product = require('../models/product')
const Comment = require('../models/comment')
const Store = require('../models/store')
const express = require('express')
const youtubeparser = require('../utilities/youtubeparser')
const router = express.Router()

router.get('/videos', async (req, res) => {
    try {
        const video = await Video.find().populate('store', 'name')
        res.status(200).json(video)
    } catch (error) {
        console.log("Entering Error");
        res.status(404).json({ message: error.message })
    }
})
router.get('/videos/:id', async (req, res) => {
    try {
        const video = await Video.find({ _id: req.params.id }).populate('store', 'name').exec()
        console.log("Someone is Getting the Video");
        res.status(200).json(video)
    } catch (error) {
        console.log("Entering Error");
        res.status(404).json({ message: error.message })
    }
})
router.post('/videos', async (req, res) => {

    const youtubeID = youtubeparser(req.body.videoURL)
    const thumbnailURL = `http://img.youtube.com/vi/${youtubeID}/0.jpg`
    const video = new Video({
        name: req.body.name,
        store: req.body.store,
        views: 0,
        thumbnailURL: thumbnailURL,
        videoURL: req.body.videoURL,
        timestamp: Date.now()
    })
    try {

        const savedVideo = await video.save()
        res.status(201).json("Berhasil")
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.post('/videos/multiple', (req, res) => {
    const body = req.body;
    console.log(body);

    let videos = req.body.map(item => {
        const youtubeID = youtubeparser(item.videoURL)
        const thumbnailURL = `http://img.youtube.com/vi/${youtubeID}/0.jpg`
        return {
            name: item.name,
            store: item.store,
            views: 0,
            thumbnailURL: thumbnailURL,
            videoURL: item.videoURL,
            timestamp: Date.now()
        };
    })
    Video.insertMany(videos)
        .then(() => {
            console.log("Videos Added");
            res.status(200).json("Videos Added");
        })
        .catch(err => res.status(400).json("Error: " + err));
});


router.patch('/videos/view/:id', async (req, res) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } })

        res.status(200).json({ message: "Success" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.find({ videoID: req.params.id }).exec()
        res.status(200).json(product)
    } catch (error) {
        console.log("Entering Error");
        res.status(404).json({ message: error.message })
    }
})

router.post('/products/:id/multiple', (req, res) => {
    const body = req.body;
    console.log(body);

    let products = req.body.map(item => {

        return {
            videoID:item.videoID,
            productURL: item.productURL,
            productTitle:item.productTitle,
            productPrice:item.productPrice,
            timestamp: Date.now()
        };
    })
    Video.insertMany(videos)
        .then(() => {
            console.log("Videos Added");
            res.status(200).json("Videos Added");
        })
        .catch(err => res.status(400).json("Error: " + err));
});

router.get('/comments/:id', async (req, res) => {
    try {
        const comment = await Comment.find({ videoID: req.params.id }).exec()
        res.json(comment)
    } catch (error) {
        console.log("Entering Error");
        res.status(500).json({ message: error.message })
    }
})

router.post('/comments/:id', async (req, res) => {
    const comment = new Comment({
        videoID: req.params.id,
        username: req.body.username,
        comment: req.body.comment,
        timestamp: Date.now()
    })
    try {
        const commentToSave = await comment.save()
        res.status(201).json("Success")
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/store/:id', async (req, res) => {
    console.log("Someone Is getting Store");
    try {
        const store = await Store.find({ _id: req.params.id }).exec()
        res.status(200).json(store)
    } catch (error) {
        console.log("Entering Error");
        res.status(404).json({ message: error.message })
    }
})
module.exports = router