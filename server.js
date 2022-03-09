//---* Import Dependencies *---//

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override")
const path = require("path")

const Photograph = require("./models/photograph");


//---* Create Express App *---//

const app = express();
app.engine("jsx", require("express-react-views").createEngine())
app.set("view engine", "jsx")



//---* Middleware *---//

app.use(morgan("tiny"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));


//---* Routes *---//
app.get("/", (req, res) => {
    res.render("photographs/Index")
})

//Index
app.get("/photographs", (req, res) => {
    res.redirect("photographs/Index")
})

//New
app.get("/photographs/new", (req, res) => {
    res.render("New")
})

//Delete
app.delete("/:id", (req, res) => {
    const { id } = req.params;
    Photograph.findByIdAndDelete(id)
    .then(() => {
        res.redirect("/photographs")
    })
    .catch((error) => {
        res.status(400).send({ error })
    })
})

//Update
app.put("/:id", (req, res) => {
    const { id } = req.params;
    req.body.isImageForSale = req.body.isImageForSale === "on" ? true : false;
    Photograph.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedPhotograph) => {
        res.redirect(`/photographs/${id}`)
    })
    .catch((error) => {
        res.status(400).send({ error })
    })
})

//Create
app.post("/photographs", (req, res) => {
    Photograph.create(req.body, (err, createdPhotograph) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect("/photographs")
        }
    })
})
//Edit
app.get("/:id/edit", (req, res) => {
    const { id } = req.params;
    Photograph.findById(id)
    .then((photograph) => {
        res.render("photographs/Edit", { fruit })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

//Show
app.get("/:id", (req, res) => {
    const { id } = req.params

    Photograph.findById(id) 
        .then((photograph) => {
            res.render("fruits/Show", { photograph })
        })
        .catch((error) => {
            res.status(400).json({ error })    
        })
})


//---* Server Listener *---//

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`*** Listening on port ${PORT} ***`))