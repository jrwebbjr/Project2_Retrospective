const express = require("express");
const Video = require("../models/video")

const router = express.Router();

//---* Video Routes *---//

//Index
router.get("/", (req, res) => {
    Video.find({})
    .then((videos) => {
        console.log(videos)
        for(const video of videos){
            const test = video.video.includes("https://youtu.be/")
            console.log(test)
            if(test){
                const vidId = video.video.slice(17, video.video.length+1)
                video.video = vidId
            } else {
                video.video = '';
            }
        }
        res.render("video/Index", { videos })
    })
    .catch((error) => {
        // res.status(400).json({ error })    
        console.log(error)
        })
})

//New
router.get("/new", (req, res) => {
    res.render("video/New")
})

//Delete
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    Video.findByIdAndDelete(id)
    .then(() => {
        res.redirect("/video")
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

//Update
router.put("/:id", (req, res) => {
    Video.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedVideo) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect(`/video/${req.params.id}`)
        }
    })
})

//Create
router.post("/", (req, res) => {
    Video.create(req.body, (error, createdVideo) => {
        if(error){
            res.status(400).json({ error })
        } else {
            res.redirect("/video")
        }
    })
})

//Edit
router.get("/:id/edit", (req, res) => {
    const { id } = req.params;
    Video.findById(id)
    .then((video) => {
        res.render("video/Edit", { video })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

//Show
router.get("/:id", (req, res) => {
    const { id } = req.params
    Video.findById(id) 
        .then((video) => {
            if(video.video.includes("https://youtu.be/")){
                const vidId = video.video.slice(17, video.video.length+1)
                video.video = vidId
            }
            res.render("video/Show", { video })
        })
        .catch((error) => {
            res.status(400).json({ error })    
        })
})

module.exports = router;