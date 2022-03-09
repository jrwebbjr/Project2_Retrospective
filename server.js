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
    res.send("Home Page, Your Server Is Running")
})
//Index
app.get("/photographs", (req, res) => {
    res.send("Index Route Working")
})
//New
app.get("/photographs/new", (req, res) => {
    res.render("photographs/New")
})

//Delete

//Update

//Create
app.post("/photographs", (req, res) => {
    Photograph.create(req.body, (err, createdPhotograph) => {
        
    })
})
//Edit

//Show
app.get("/photographs/:id", (req, res) => {
    Photograph.findById(req.params.id, (err, foundPhotographs) => {
        if (err){
            res.status(400).send(err)
        } else {
            res.render("photographs/Show", {
                photograph: foundPhotographs
            })
        }
    })
})


//---* Server Listener *---//

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`*** Listening on port ${PORT} ***`))