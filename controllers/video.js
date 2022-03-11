//---* Video Routes *---//

//Index
app.get("/video", (req, res) => {
    Video.find({}, (err, foundVideos) => {
        if (err) {
            res.status(400).json({ err })
        } else {
            res.render("videos/Index", {
                videos: foundVideos
            })
        }
    })
})

//New
app.get("/videos/new", (req, res) => {
    res.render("videos/New")
})

//Delete
app.delete("/videos/:id", (req, res) => {
    const { id } = req.params;
    Video.findByIdAndDelete(id)
    .then(() => {
        res.redirect("/videos")
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

//Update
app.put("/videos/:id", (req, res) => {
    Video.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedVideo) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect(`/videos/${req.params.id}`)
        }
    })
})

//Create
app.post("/videos", (req, res) => {
    Video.create(req.body, (error, createdVideo) => {
        if(error){
            res.status(400).json({ error })
        } else {
            res.redirect("/videos")
        }
    })
})

//Edit
app.get("/videos/:id/edit", (req, res) => {
    const { id } = req.params;
    Video.findById(id)
    .then((video) => {
        res.render("videos/Edit", { video })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

//Show
app.get("/videos/:id", (req, res) => {
    const { id } = req.params

    Video.findById(id) 
        .then((video) => {
            res.render("videos/Show", { video })
        })
        .catch((error) => {
            res.status(400).json({ error })    
        })
})