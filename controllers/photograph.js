const express = require("express");
const Photograph = require("../models/photograph")

const router = express.Router();

//---* Photograph Routes *---//

//Home
router.get("/", (req, res) => {
    res.render("photographs/Home")
})

//Index
router.get("/photographs", (req, res) => {
    Photograph.find({}, (err, foundPhotographs) => {
        if (err) {
            res.status(400).json({ err })
        } else {
            res.render("photographs/Index", {
                photographs: foundPhotographs
            })
        }
    })
})

//New
router.get("/photographs/new", (req, res) => {
    res.render("photographs/New")
})

//Delete
router.delete("/photographs/:id", (req, res) => {
    const { id } = req.params;
    Photograph.findByIdAndDelete(id)
    .then(() => {
        res.redirect("/photographs")
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

//Update
router.put("/photographs/:id", (req, res) => {
    Photograph.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPhotograph) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect(`/photographs/${req.params.id}`)
        }
    })
})

//Create
router.post("/photographs", (req, res) => {
    Photograph.create(req.body, (error, createdPhotograph) => {
        if(error){
            res.status(400).json({ error })
        } else {
            res.redirect("/photographs")
        }
    })
})
//Edit
router.get("/photographs/:id/edit", (req, res) => {
    const { id } = req.params;
    Photograph.findById(id)
    .then((photograph) => {
        res.render("photographs/Edit", { photograph })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

//Show
router.get("/photographs/:id", (req, res) => {
    const { id } = req.params

    Photograph.findById(id) 
        .then((photograph) => {
            res.render("photographs/Show", { photograph })
        })
        .catch((error) => {
            res.status(400).json({ error })    
        })
})

module.exports = router;