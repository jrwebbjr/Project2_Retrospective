//---* Import Dependencies *---//

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const path = require("path")

const Photograph = require("./models/photograph");


//---* Create Express App *---//

const app = express();
app.engine("jsx", require("express-react-views").createEngine())
app.set("view engine", "jsx")



//---* Middleware *---//

app.use(morgan("tiny"));
app.use(express.urlencoded({extended: true}));



//---* Routes *---//
app.get("/", (req, res) => {
    res.send("Home Page, Your Server Is Running")
})
//Index
app.get("/photograph", (req, res) => {
    res.send("Index Route Working")
})
//New
app.get("/photograph/new", (req, res) => {
    res.render("photograph/New")
})

//Delete

//Update

//Create

//Edit

//Show



//---* Server Listener *---//

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`*** Listening on port ${PORT} ***`))